import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { TestClass } from './dto/app.dto'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Query() queryParmas: TestClass) {
    return this.appService.getHello(queryParmas);
  }
}
