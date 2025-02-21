import { Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe, ParseUUIDPipe, Query, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { Person } from './Person';
import { TimeoutInterceptor } from './interceptor/TimeoutInterceptor';
import { AuthInterceptor } from './interceptor/AuthInterceptor';
import { Observable, from } from 'rxjs';
import { log } from 'console';

@Controller('hello')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('/info/:id')
  getHello(@Param('id') id: string): Person {
    return this.appService.getHello(id);
  }

  @Get()
  @UseInterceptors(TimeoutInterceptor)
  hello(): string {
    return "hello world";
  }

  @Get('names')
  @UseInterceptors(AuthInterceptor)
  getNameList(): Observable<any> {
    return from(['cuizhihui', 'zhangsan', 'lisi']);
    // throw Error("Error!!!!")
  }

  @Get("/num/:id")
  getNum(@Param('id', new ParseIntPipe({
    exceptionFactory(error) {
      throw new HttpException(`参数id类型错误--${error}`, HttpStatus.BAD_REQUEST,);
    },
  })) id: number): string {
    log('id', id);
    return `your id is ${id}`;
  }


  @Get('uuid')
  getUUID(@Query('id', ParseUUIDPipe) id: string): string {
    log('id', id);
    return "your uuid is " + id;
  }
}
