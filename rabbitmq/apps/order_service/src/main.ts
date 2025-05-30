import { NestFactory } from "@nestjs/core";
import { OrderServiceModule } from "./order_service.module";
import { MicroserviceOptions, Transport } from "@nestjs/microservices";
import { Logger } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    OrderServiceModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: ["amqp://guest:guest@localhost:5672"],
        queue: "order_queue",
        queueOptions: {
          durable: true,
        },
      },
    }
  );
  await app.listen();
  Logger.log('Order service is running')
}
bootstrap();
