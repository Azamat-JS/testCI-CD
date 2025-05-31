import { NestFactory } from "@nestjs/core";
import { NotificationServiceModule } from "./notification-service.module";
import { MicroserviceOptions, Transport } from "@nestjs/microservices";
import { Logger } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    NotificationServiceModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: ["amqp://guest:guest@localhost:5672"],
        queue: "notification_queue",
        queueOptions: {
          durable: true,
        },
      },
    }
  );
  await app.listen();
  Logger.log('Notification service is running')
}
bootstrap();
