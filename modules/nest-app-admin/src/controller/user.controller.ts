import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { AddUserDto } from '../dto/user/add-user.dto';
import { UpdateUserDto } from '../dto/user/update-user.dto';

@Controller('user')
export class UserController {
  constructor(
    private userService: UserService,
  ) {}

  @Get()
  getList() {
    return [];
  }

  @Post()
  add(@Body() body: AddUserDto) {
    return this.userService.add(body);
  }

  @Put()
  update(@Body() body: UpdateUserDto) {
    return this.userService.update();
  }
}
