import { Module, NestModule, OnModuleInit } from '@nestjs/common';
import { AController } from './a.controller';

@Module({
  controllers: [AController],
})
export default class AModule {}
