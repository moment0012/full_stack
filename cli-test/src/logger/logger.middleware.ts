import { Inject, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { UserService } from 'src/user/user.service';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {

  @Inject(UserService)
  private userService: UserService;
  use(req: Request, res: Response, next: NextFunction) {
    console.log("before 中间件")
    console.log('中间件作用的方法执行结果，', this.userService.findAll());
    next();
    console.log("after 中间件")
  }
}
