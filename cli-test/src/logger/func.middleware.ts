import { Request, Response, NextFunction } from 'express';

export function LoggerMiddleware(
    req: Request,
    res: Response,
    next: NextFunction
) {
    console.log("中间件before")
    next();
    console.log("中间件after")
}