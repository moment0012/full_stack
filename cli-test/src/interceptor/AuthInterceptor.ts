import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { Observable, of } from "rxjs";
import { map, filter, tap, toArray, catchError } from "rxjs/operators";

/**
 * 通过map操作符吧结果专为答谢，然后使用filter操作符过滤长度大于2的名称，
 * 接着打印日志并最后转位数组，如果出现异常使用catchEoor来捕获并处理。
 */
export class AuthInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        // 在请求处理之前执行日志记录
        console.log('接收到一个请求。。。');
        return next.handle().pipe(
            // 使用map操作符将每个用户名转换为大写
            map((name) => name.toUpperCase()),

            // 使用filter操作符过滤出名字长度大于2的用户
            filter((name) => name.length > 4),

            // 使用tap操作符进行简单的日志记录
            tap((arr) => console.log(`过滤的名字:${arr}`)),

            // 转为数组
            toArray(),

            // 使用catchError操作符补货并处理任何错误
            catchError((error) => {
                console.log('发生错误：', error);

                // 返回新的Observable
                return of("Fallback value");
            })
        );
    }
}