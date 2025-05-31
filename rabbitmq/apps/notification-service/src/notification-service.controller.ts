import { Controller, Get } from '@nestjs/common';
import { NotificationServiceService } from './notification-service.service';
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller()
export class NotificationServiceController {
  constructor(private readonly notificationServiceService: NotificationServiceService) {}

  @Get()
  getHello(): string {
    return this.notificationServiceService.getHello();
  }

  @EventPattern('notification-sent')
  orderCreated(@Payload() order:any){
    console.log('Notification service: order created', order)
  }

  @EventPattern('successful-payment')
  successPayment(@Payload() order:any){
    console.log('Notification service: payment succeed', order)
  }
}
