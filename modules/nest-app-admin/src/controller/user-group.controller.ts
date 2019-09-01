import { Body, Controller, Get, Param, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { UserGroupService } from '../service/user-group.service';
import { AddUserGroupDto } from '../dto/user-group/add-user-group.dto';
import { UpdateUserGroupDto } from '../dto/user-group/update-user-group.dto';

@Controller('userGroup')
export class UserGroupController {
  constructor(private userGroupService: UserGroupService) {}

  @Get()
  getList(@Query() query) {
    return this.userGroupService.getList(query);
  }

  @Post()
  add(@Body() body: AddUserGroupDto) {
    return this.userGroupService.add(body);
  }

  @Put()
  update(body: UpdateUserGroupDto) {
    return this.userGroupService.update(body.id, body);
  }
}
