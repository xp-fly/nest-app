import { Controller, Get } from '@nestjs/common';

@Controller('a')
export class AController {

  @Get()
  get(): string {
    return 'hello a module';
  }
}
