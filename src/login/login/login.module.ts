import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/shared-entity/user.entity.dto';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [LoginController],
  providers: [LoginService],
})
export class LoginModule {}
