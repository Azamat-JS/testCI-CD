import { Controller } from '@nestjs/common';
import { Ctx, EventPattern, KafkaContext, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {

@EventPattern('order.created')
async handleOrderCreation(@Payload() order, @Ctx() context: KafkaContext){
    console.log(order);   
}
}
