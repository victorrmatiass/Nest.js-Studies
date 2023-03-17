import { Controller, Get, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('enviarhello')
  @HttpCode(HttpStatus.CREATED)
  sendHello() {
    return {message : "Olá enviado com sucesso"}
  }
}
