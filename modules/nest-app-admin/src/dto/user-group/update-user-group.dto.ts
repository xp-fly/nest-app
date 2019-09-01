import { IsNumber, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { PrivilegeDto } from './add-user-group.dto';

export class UpdateUserGroupDto {
  @IsNumber()
  id: number;

  @IsString()
  name: string; // 创建用户组

  @ValidateNested()
  @Type(type => PrivilegeDto)
  privileges: PrivilegeDto[];
}
