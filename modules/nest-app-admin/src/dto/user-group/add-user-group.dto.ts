import { IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class AddUserGroupDto {
  @IsString()
  name: string; // 创建用户组

  @ValidateNested()
  @Type(type => PrivilegeDto)
  privileges: PrivilegeDto[];
}

export class PrivilegeDto {
  resource: string; // 资源
  act: string; // 行为
}
