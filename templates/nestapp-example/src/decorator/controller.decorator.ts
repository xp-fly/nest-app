import {Controller as NestController} from '@nestjs/common'
import { apiPrefix } from '../constant';

export function Controller(path: string) {
    return NestController(`${apiPrefix}/${path}`);
}
