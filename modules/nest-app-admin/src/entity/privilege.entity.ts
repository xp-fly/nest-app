import { BaseAbstractEntity } from '../../../../src/entity/base.abstract.entity';
import { Column } from 'typeorm';

@Column({
  name: 'privilege',
})
export class Privilege extends BaseAbstractEntity {
  @Column({
    type: 'text',
    comment: '权限',
  })
  privilege: string;

  @Column({
    type: 'int',
    name: 'prod',
    comment: '产品类型',
  })
  prod: number;
}

export class PrivilegeResource {
  resource: string;
  act: string;
}
