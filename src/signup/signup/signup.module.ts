import { Module } from '@nestjs/common';
import { SignupService } from './signup.service';
import { SignupController } from './signup.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/shared/user.entity.dto';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [SignupController],
  providers: [SignupService],
})
export class SignupModule {}
