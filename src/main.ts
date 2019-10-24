import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { TransformInterceptor } from './interceptors/transform.interceptor';
import { AnyExceptionFilter } from './filters/any-exception.filter';
import { init } from './global';

init();

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    // 全局校验
    app.useGlobalPipes(new ValidationPipe());
    // 全局拦截器
    app.useGlobalInterceptors(new TransformInterceptor());
    // 全局过滤器
    app.useGlobalFilters(new AnyExceptionFilter());
    await app.listen(3000);
}

bootstrap();
