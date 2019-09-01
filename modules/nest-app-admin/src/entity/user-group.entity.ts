import { Column, Entity } from 'typeorm';
import { BaseAbstractEntity } from 'src/entity/base.abstract.entity';

@Entity({
  name: 'user_group',
})
export class UserGroup extends BaseAbstractEntity {
  @Column({
    type: 'varchar',
    comment: '姓名',
    default: '',
  })
  name: string;

  @Column({
    type: 'varchar',
    comment: 'uuid',
  })
  uuid: string;

  @Column({
    type: 'text',
    comment: '权限数据',
  })
  privilege: string;
}

export interface Privilege {

}
