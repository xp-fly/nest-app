import {InjectRepository as NestInjectRepository} from '@nestjs/typeorm'
import { databaseConnectName } from '../constant';

export function InjectRepository(entity: Function) {
    return NestInjectRepository(entity, databaseConnectName);
}
