import { Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('cache')
export class AppController {
  constructor(private readonly appService: AppService) {}
@Post()
async setCacheKey(@Query('key') key: string, @Query('value') value:string){
  await this.appService.setCacheKey(key, value);
  return {
    success:true,
    status: 201,
    message: "Key cached successfully"
  };
}

@Get('get/:key')
async getCacheKey(@Param('key') key: string){
 const data = await this.appService.getCacheKey(key);
 return {
  success: true,
  status: 200,
  data
 };
}

@Delete('/:key')
  async deleteCacheKey(@Param('key') key:string){
    await this.appService.deleteCacheKey(key)
    return {
      success: true,
      status: 201,
      message: 'Key deleted successfully'
    }
  }

  @Get('/reset')
  async resetCache(){
    await this.appService.resetCache();
    return {
      success: true,
      status: 200,
      message: "Cache cleared successfully"
    }
  }

  @Get('/store')
  async cacheStore() {
    const store = await this.appService.cacheKeys();
    return {
      success: true,
      status: 200,
      data: store
    };
  }
  
}
