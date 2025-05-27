import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session'
import * as passport from 'passport'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(session({
    secret: '764d3846e4a8dd0154d34314ec0aa60698ad336e9798a6b41c6008c0ef0ddcad', // Used to sign the session ID cookie
    resave:false,  // Avoid resaving if session wasn't modified
    saveUninitialized:false,   // Don't save empty sessions
    cookie: {
      maxAge:60000,
      httpOnly:true,  // Can't be accessed via JS (prevents XSS)
      secure:false,  // Set to true if using HTTPS
    }
  }))
  await app.listen(3000, () => {
    console.log('server is running on port:3000')
  });
}
bootstrap();
