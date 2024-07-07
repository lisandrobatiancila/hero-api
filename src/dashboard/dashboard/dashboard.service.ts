import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HeroEntity } from 'src/shared-entity/hero.entity';
import { Repository } from 'typeorm';
import { HeroDTO } from './dto/hero.dto';

@Injectable()
export class DashboardService {
  constructor(
    @InjectRepository(HeroEntity) private heroEntity: Repository<HeroEntity>,
  ) {}
  create() {
    return 'This action adds a new dashboard';
  }

  async getAllHeroes(): Promise<HeroDTO[]> {
    const records = await this.heroEntity.query('CALL getAllHero()');
    const heroList = records[0] as HeroDTO[];
        
    return Promise.resolve(heroList);
  }

  findOne(id: number) {
    return `This action returns a #${id} dashboard`;
  }

  update() {
    return `This action updates a # dashboard`;
  }

  remove(id: number) {
    return `This action removes a #${id} dashboard`;
  }
}
