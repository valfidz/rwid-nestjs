import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { dotEnvLoader, loadConfig } from 'nest-zod-config';
import { AppConfig } from './app.config';
import { dot } from 'node:test/reporters';

async function bootstrap() {
  const config = await loadConfig(AppConfig, dotEnvLoader());
  const app = await NestFactory.create(AppModule);
  await app.listen(config.PORT);
}
bootstrap();
