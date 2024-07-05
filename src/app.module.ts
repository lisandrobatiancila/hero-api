import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SignupModule } from './signup/signup/signup.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './shared-entity/user.entity.dto';
import { LoginModule } from './login/login/login.module';
import { DashboardModule } from './dashboard/dashboard/dashboard.module';
import { HeroEntity } from './shared-entity/hero.entity';
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
      entities: [UserEntity, HeroEntity],
      database: `${DB_INSTANCE}`,
      synchronize: true,
    }),
    LoginModule,
    DashboardModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
