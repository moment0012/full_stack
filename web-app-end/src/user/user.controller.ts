import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, UseInterceptors, UseFilters, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserGuard } from './UserGuard';
import { TimeoutInterceptor } from 'src/interceptor/TimeoutInterceptor';
import { HttpExceptionFilter } from 'src/filter/HttpExceptionFilter';

@Controller('user')
// @UseGuards(new UserGuard())
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  // @UseInterceptors(new TimeoutInterceptor())
  // @UseFilters(new HttpExceptionFilter())
  create(@Body() createUserDto: CreateUserDto): Record<string, any> {
    // return this.userService.create(createUserDto);
    return createUserDto;
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
