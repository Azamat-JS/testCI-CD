import { Body, Controller, Get, Post, Request, Session } from '@nestjs/common';
import { AppService } from './app.service';
import { LoginDto } from './loginDto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('auth')
  async getAuthSession(@Session() sesssion: Record<string, any>){
    console.log(sesssion)
  }

  @Post('login')
  async loginUser(@Body() loginDto:LoginDto, @Request() req:any){

    req.session.user = {
      name: loginDto.username,
      role: loginDto.role
    }
    console.log(req.session)    
  }
  }

