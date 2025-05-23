import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientKafka, EventPattern, Payload } from '@nestjs/microservices';
import { KAFKA_SERVICE } from './constants';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    @Inject(KAFKA_SERVICE) private readonly kafkaClient:ClientKafka
  ) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @EventPattern('payment-process')
  handlePayment(@Payload() order: any){
    console.log('Payment service received a new order', order);
    this.kafkaClient.emit('payment-succeed', order)
  }
}
