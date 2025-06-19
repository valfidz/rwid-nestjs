import { Injectable } from '@nestjs/common';

import { AppConfig } from './app.config';

@Injectable()
export class AppService {
  constructor(private readonly config: AppConfig) {}

  getHello(): string {
    return 'Hello World! We are using port: ' + this.config.PORT + ' and text: ' + this.config.TEXT;
  }
}
