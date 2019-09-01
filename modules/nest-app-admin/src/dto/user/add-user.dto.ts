import { IsInt, IsString } from 'class-validator';

export class AddUserDto {
  @IsString()
  username: string;

  @IsInt()
  userGroupId: number;
}
