import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { config } from './orm.config';
import { TestModule } from './test/test.module';

@Module({
  imports: [AuthModule, UsersModule, TypeOrmModule.forRoot(config), TestModule],
  providers: [AppService],
})
export class AppModule {}
