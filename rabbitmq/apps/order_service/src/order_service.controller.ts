import { Controller, Get } from '@nestjs/common';
import { OrderServiceService } from './order_service.service';
import {EventPattern, Payload} from '@nestjs/microservices'

@Controller()
export class OrderServiceController {
  constructor(private readonly orderServiceService: OrderServiceService) {}

  @Get()
  getHello(): string {
    return this.orderServiceService.getHello();
  }

  @EventPattern('order-created')
  handleOrder(@Payload() order:any){
   console.log('[OrderService]', 'Received order data:', order);
  }
}
