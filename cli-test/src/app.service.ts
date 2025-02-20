import { Injectable } from '@nestjs/common';
import { Person } from './Person';
@Injectable()
export class AppService {

  getHello(id: string): Person {
    const name = 'cuizhihui';
    return new Person(id, name, 25, `你好啊${name}`, `我是客户请求的id:${id}`);
  }

}
