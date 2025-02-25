import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable, tap, timeout } from "rxjs";

@Injectable()
export class TimeoutInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {

        // 输出格式：进入拦截器:XXX类的-xxx方法
        console.log(`进入拦截器:${context.getClass().name}-${context.getHandler().name}`);
        const now = Date.now();
        return next.handle().pipe(
            tap(() => {
                console.log(`请求处理时间:${Date.now() - now}ms`);
            }),
            timeout({
                each: 10
            })
        );

    }

}