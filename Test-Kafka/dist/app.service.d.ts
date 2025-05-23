import { ProducerService } from './kafka/producer.service';
export declare class AppService {
    private readonly producerService;
    constructor(producerService: ProducerService);
    getMessage(): Promise<string>;
}
