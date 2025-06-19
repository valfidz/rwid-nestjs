import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ZodConfigModule, dotEnvLoader } from 'nest-zod-config';
import { AppConfig } from './app.config';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [
    ZodConfigModule.forRootAsync({
      config: AppConfig,
      loader: [dotEnvLoader()],
    }),
    UsersModule,
    PostsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
