import { ExecutionContext, Injectable, NestInterceptor, CallHandler } from '@nestjs/common';
import { map } from 'rxjs/internal/operators';

/**
 * 格式化回包内容
 */
@Injectable()
export class TransformInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler) {
        return next.handle().pipe(map(data => ({
            code: 200,
            message: 'success',
            data,
        })));
    }
}
