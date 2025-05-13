import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CacheModule } from '@nestjs/cache-manager';
import { UserModule } from './user/user.module';

@Module({
  imports: [CacheModule.register({
    max: 100,
    isGlobal:true,
    ttl: 60,
  }), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
