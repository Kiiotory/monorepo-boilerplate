import { Module } from '@nestjs/common';
import { UserController } from './modules/users/users.controller';
// import { UsersService } from './modules/users/users.service';
import { UsersService } from '@users/users.service';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UsersService],
})
export class AppModule {}
