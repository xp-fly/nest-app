import { BaseAbstractEntity } from '../../../../src/entity/base.abstract.entity';
import { Column, Entity } from 'typeorm';

@Entity({
  name: 'casbin_rule',
})
export class CasbinRule extends BaseAbstractEntity {
  @Column({
    type: 'varchar',
    comment: '规则类型',
    default: '',
  })
  ptype: string;

  @Column({
    type: 'varchar',
    comment: '实体',
  })
  v1: string;

  @Column({
    type: 'varchar',
    comment: '资源',
  })
  v2: string;

  @Column({
    type: 'varchar',
    comment: '资源',
  })
  v3: string;
}
