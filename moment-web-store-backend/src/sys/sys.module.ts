import { Module } from "@nestjs/common";
import { SysController } from "./sys.controller";
import { SysService } from "./sys.service";
import { UserModule } from "src/user/user.module";

@Module({
    imports: [UserModule],
    controllers: [
        SysController
    ],
    providers: [
        SysService
    ],
})
export class SysModule {

}