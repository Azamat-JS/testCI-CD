import { Controller, Get, Inject } from '@nestjs/common';
import { PaymentServiceService } from './payment-service.service';
import { ClientProxy, EventPattern, Payload } from '@nestjs/microservices';
import { NOTIFICATION_SERVICE_RABBITMQ } from './constants';

@Controller()
export class PaymentServiceController {
  constructor(private readonly paymentServiceService: PaymentServiceService,
    @Inject(NOTIFICATION_SERVICE_RABBITMQ) private readonly notificationClient:ClientProxy
  ) {}

  @Get()
  getHello(): string {
    return this.paymentServiceService.getHello();
  }

  @EventPattern('payment-process')
  paymentProcess(@Payload() order: any){
    // Payment process done
    console.log('Payment service received order', order);
    this.notificationClient.emit('successful-payment', order)
  }

}
