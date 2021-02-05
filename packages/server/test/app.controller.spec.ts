import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from '../src/modules/users/users.controller';
import { UsersService } from '../src/modules/users/users.service';

describe('AppController', () => {
  let appController: UserController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UsersService],
    }).compile();

    appController = app.get<UserController>(UserController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!Application name');
    });
  });
});
