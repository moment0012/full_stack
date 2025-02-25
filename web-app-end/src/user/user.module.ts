import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { LoggerMiddleware } from 'src/logger/logger.middleware';

@Module({
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService]
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // 针对此模块的所有路由绑定中间件
    // consumer.apply(LoggerMiddleware).forRoutes('*');
    consumer.apply(LoggerMiddleware).forRoutes({
      path: '/user',
      method: RequestMethod.GET
    })
  }
}
