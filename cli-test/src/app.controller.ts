import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { Person } from './module/Person';

@Controller('hello')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get(':id')
  getHello(@Param('id') id: string): Person {
    return this.appService.getHello(id);
  }
}
