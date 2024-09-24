import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOkResponse, ApiProperty } from "@nestjs/swagger";

class HelloWordDto {
  @ApiProperty()
  messages: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOkResponse({
    type: HelloWordDto
  })
  getHello(): HelloWordDto {
    return { messages: this.appService.getHello() };
  }
}
