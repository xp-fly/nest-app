import { Column } from 'typeorm';
import { BaseAbstractEntity } from '../../../../src/entity/base.abstract.entity';

@Column({
  name: 'user',
})
export class User extends BaseAbstractEntity {
  @Column({
    type: 'varchar',
    comment: '用户姓名',
    default: '',
  })
  username: string;

  @Column({
    type: 'int',
    name: 'user_group_id',
    default: 0,
    comment: '用户组 id',
  })
  userGroupId: number;
}
