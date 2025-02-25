import { Controller, Get, HttpException, HttpStatus, Param, ParseArrayPipe, ParseIntPipe, ParseUUIDPipe, Query, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { TimeoutInterceptor } from './interceptor/TimeoutInterceptor';
import { AuthInterceptor } from './interceptor/AuthInterceptor';
import { Observable, from } from 'rxjs';
import { log } from 'console';

@Controller('')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  hello() {
    return "hello";
  }
  // @Get('/info/:id')
  // getHello(@Param('id') id: string): Person {
  //   return this.appService.getHello(id);
  // }

  // @Get()
  // @UseInterceptors(TimeoutInterceptor)
  // hello(): string {
  //   return "hello world";
  // }

  // @Get('names')
  // @UseInterceptors(AuthInterceptor)
  // getNameList(): Observable<any> {
  //   return from(['cuizhihui', 'zhangsan', 'lisi']);
  //   // throw Error("Error!!!!")
  // }

  // @Get("/num/:id")
  // getNum(@Param('id', new ParseIntPipe({
  //   exceptionFactory(error) {
  //     throw new HttpException(`参数id类型错误--${error}`, HttpStatus.BAD_REQUEST,);
  //   },
  // })) id: number): string {
  //   log('id', id);
  //   return `your id is ${id}`;
  // }


  // @Get('uuid')
  // getUUID(@Query('id', ParseUUIDPipe) id: string): string {
  //   log('id', id);
  //   return "your uuid is " + id;
  // }

  @Get('array')
  getArray(@Query('ids', ParseArrayPipe) ids: Number[]): string {
    return `your ids are ${ids.join(',')}`;
  }

  @Get('array2')
  customizationArray(@Query('ids', new ParseArrayPipe({
    separator: "-"
  })) ids: Number[]): string {
    return `your ids are ${ids.join(',')}`;
  }
}
