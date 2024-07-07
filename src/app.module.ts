import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SignupModule } from './signup/signup/signup.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './shared-entity/user.entity.dto';
import { LoginModule } from './login/login/login.module';
import { DashboardModule } from './dashboard/dashboard/dashboard.module';
import { HeroEntity, HireHeroEntity } from './shared-entity/hero.entity';
import { HireModule } from './hire/hire.module';

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
      database: 'hero',
      entities: [UserEntity, HeroEntity, HireHeroEntity],
      synchronize: true, 
    }),
    LoginModule,
    DashboardModule,
    HireModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
