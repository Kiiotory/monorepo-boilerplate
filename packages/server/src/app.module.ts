import { Module } from '@nestjs/common';
import { UserController } from '@users/users.controller';
import { UsersService } from '@users/users.service';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UsersService],
})
export class AppModule {}
