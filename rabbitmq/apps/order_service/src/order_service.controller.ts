import { Controller, Get, Inject } from '@nestjs/common';
import { OrderServiceService } from './order_service.service';
import {ClientProxy, EventPattern, Payload} from '@nestjs/microservices'
import { NOTIFICATION_SERVICE_RABBITMQ, PAYMENT_SERVICE_RABBITMQ } from './constants';

@Controller()
export class OrderServiceController {
  constructor(private readonly orderServiceService: OrderServiceService,
    @Inject(PAYMENT_SERVICE_RABBITMQ) private readonly paymentClient: ClientProxy,
    @Inject(NOTIFICATION_SERVICE_RABBITMQ) private readonly notificationClient: ClientProxy
  ) {}

  @Get()
  getHello(): string {
    return this.orderServiceService.getHello();
  }

  @EventPattern('order-created')
  handleOrder(@Payload() order:any){
   console.log('[OrderService]', 'Received order data:', order);
   this.paymentClient.emit('payment-process', order)
   this.notificationClient.emit('notification-sent', order)
  }
}
