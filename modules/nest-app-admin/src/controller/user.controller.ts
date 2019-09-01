import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from '../service/user.service';

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
  add(@Body()) {}
}
