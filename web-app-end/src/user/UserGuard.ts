import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";
@Injectable()
export class UserGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        console.log(`进入守卫`);

        // 通常根据ExecutionContext信息来判断全县，返回true/false，表示方形或禁止通行
        return true;
    }
}
