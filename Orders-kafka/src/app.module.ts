import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';

@Module({
  imports: [ClientsModule.register([{
    name: 'KAFKA_CLIENT',
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers: ['localhost: 9092'],
        clientId: 'orderms'
      },
      producer: {
        allowAutoTopicCreation: true
      },
      producerOnlyMode: true
    }
  }])],
  controllers: [OrdersController, AppController],
  providers: [OrdersService],
})
export class AppModule {}
