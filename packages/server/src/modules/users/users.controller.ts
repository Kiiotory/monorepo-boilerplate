import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { APP_NAME } from '@core/constants';

@Controller()
export class UserController {
  constructor(private readonly appService: UsersService) {}

  @Get()
  getHello(): string {
    // console.log(APP_NAME);
    return this.appService.getHello();
  }
}
