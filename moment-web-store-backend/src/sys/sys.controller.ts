import { Body, Controller, Inject, Post } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { SysService } from './sys.service';

@Controller('sys')
export class SysController {
    @Inject(UserService)
    private userService: UserService;

    constructor(private readonly sysService: SysService) { }

    @Post('registry')
    registry() { }
}