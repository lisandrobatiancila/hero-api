import { Module } from '@nestjs/common';
import { HireService } from './hire.service';
import { HireController } from './hire.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HireHeroEntity } from 'src/shared-entity/hero.entity';

@Module({
  imports: [TypeOrmModule.forFeature([HireHeroEntity])],
  controllers: [HireController],
  providers: [HireService],
})
export class HireModule {}
