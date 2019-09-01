import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CasbinRule } from '../entity/casbin-rule.entity';
import { PrivilegeResource } from '../entity/privilege.entity';

@Injectable()
export class CasbinRuleService {
  constructor(
    private casbinRuleRepo: Repository<CasbinRule>,
  ) {}

  /**
   * 更新用户组的权限策略
   * @param roleId
   * @param privileges
   */
  async updatePolicy(roleId: string, privileges: PrivilegeResource[]) {
    const subId = `role:${roleId}`;
    const poicies = privileges.map(privilege => {
      return this.casbinRuleRepo.create({
        ptype: 'p',
        v1: subId,
        v2: `${subId}/${privilege.resource}`,
        v3: privilege.act,
      });
    });

    await this.casbinRuleRepo.delete({
      v1: subId,
    });

    await this.casbinRuleRepo.insert(poicies);
  }
}
