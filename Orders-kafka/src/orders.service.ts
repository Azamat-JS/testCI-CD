import { Inject, Injectable } from '@nestjs/common';
import { OrderDto } from './order.dto';
import { ClientKafkaProxy } from '@nestjs/microservices';

@Injectable()
export class OrdersService {
  constructor(@Inject('KAFKA_CLIENT') private kafkaClient: ClientKafkaProxy){}
async createOrder(order: OrderDto){
  console.log(order);

  this.kafkaClient.emit('order.created', order); // Message: value, key, headers
  return {message: 'Order created'}
}
}
