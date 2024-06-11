import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SignupModule } from './signup/signup/signup.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './shared-entity/user.entity.dto';
import { LoginModule } from './login/login/login.module';
import { DB_INSTANCE } from './shared-entity/db';

@Module({
  imports: [
    SignupModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: `${DB_INSTANCE}`,
      entities: [UserEntity],
      synchronize: true,
    }),
    LoginModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
