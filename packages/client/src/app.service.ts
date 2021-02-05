import { Injectable } from '@nestjs/common';
import { APP_NAME } from '@core/constants';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!' + APP_NAME;
  }
}
