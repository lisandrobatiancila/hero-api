import { Injectable } from '@nestjs/common';
import { CreateHireDto } from './dto/create-hire.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { HireHeroEntity } from 'src/shared-entity/hero.entity';
import { Repository } from 'typeorm';
import { ResponseDTO } from 'src/shared-dto/response';
import { HeroDTO } from 'src/dashboard/dashboard/dto/hero.dto';

@Injectable()
export class HireService {
  constructor(
    @InjectRepository(HireHeroEntity)
    private hireHeroEntity: Repository<HireHeroEntity>,
  ) {}
  async create(createHireDto: CreateHireDto): Promise<ResponseDTO<HeroDTO[]>> {
    const { heroID, userId, firstName, lastName } = createHireDto;

    const response = await this.hireHeroEntity.query(
      'CALL hireHero(?, ?, ?, ?)',
      [heroID, userId, firstName, lastName],
    );

    return Promise.resolve(response[0][0]);
  }

  async getAllHiredHero(userId: number): Promise<ResponseDTO<HeroDTO[]>> {
    const response = await this.hireHeroEntity.query(
      `CALL getAllPersonalHiredHero(?)`,
      [userId],
    );

    return new Promise((resolve, reject) => {
      resolve({
        code: 200,
        message: 'List of hired heroes',
        genericDTO: response[0],
      });
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} hire`;
  }

  remove(id: number) {
    return `This action removes a #${id} hire`;
  }
}
