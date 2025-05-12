import { KafkaContext } from '@nestjs/microservices';
export declare class AppController {
    handleOrderCreation(order: any, context: KafkaContext): Promise<void>;
}
