import { OrderDto } from './order.dto';
import { ClientKafkaProxy } from '@nestjs/microservices';
export declare class OrdersService {
    private kafkaClient;
    constructor(kafkaClient: ClientKafkaProxy);
    createOrder(order: OrderDto): Promise<{
        message: string;
    }>;
}
