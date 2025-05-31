import { Module } from '@nestjs/common';
import { PaymentServiceController } from './payment-service.controller';
import { PaymentServiceService } from './payment-service.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { NOTIFICATION_SERVICE_RABBITMQ } from './constants';

@Module({
  imports: [
        ClientsModule.register([
          {
            name: NOTIFICATION_SERVICE_RABBITMQ,
            transport: Transport.RMQ,
            options: {
              urls: ["amqp://guest:guest@localhost:5672"],
              queue: 'notification_queue',
              queueOptions: {
                durable: true
              }
            }
          }
        ]),
  ],
  controllers: [PaymentServiceController],
  providers: [PaymentServiceService],
})
export class PaymentServiceModule {}
