import { OrdersService } from './orders.service';
import { OrderDto } from './order.dto';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    createOrder(order: OrderDto): Promise<{
        message: string;
    }>;
}
