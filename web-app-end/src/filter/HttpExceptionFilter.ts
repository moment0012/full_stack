import { ExceptionFilter, Catch, ArgumentsHost } from "@nestjs/common";
import { Request, Response } from "express";


@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost) {
        // 指定传输协议
        const ctx = host.switchToHttp();
        // 获取请求和响应对象
        const response = ctx.getResponse<Response>();
        // 获取请求对象
        const request = ctx.getRequest<Request>();

        const status = exception.getStatus();
        const message = exception.message;

        let resMessage: string | Record<string, any> = exception.getResponse();
        console.log("进入异常过滤器")
        if (typeof resMessage === 'object') {
            resMessage = resMessage.message
        }

        response.status(status).json({
            message: resMessage || message,
            success: false,
            path: request.url,
            status
        });

    }
}