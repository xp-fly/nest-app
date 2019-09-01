import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../entity/user.entity';
import { AddUserDto } from '../dto/user/add-user.dto';
import { UpdateUserDto } from '../dto/user/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    private userRepo: Repository<User>,
  ) {}

  /**
   * 创建用户
   * @param body
   */
  async add(body: AddUserDto) {
    const user = this.userRepo.create(body);
    return await this.userRepo.save(user);
  }

  update(id: number, body: UpdateUserDto) {

  }
}
