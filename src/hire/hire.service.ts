import { Injectable } from '@nestjs/common';
import { CreateHireDto } from './dto/create-hire.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { HireHeroEntity } from 'src/shared-entity/hero.entity';
import { Repository } from 'typeorm';
import { ResponseDTO } from 'src/shared-dto/response';

@Injectable()
export class HireService {
  constructor(
    @InjectRepository(HireHeroEntity)
    private hireHeroEntity: Repository<HireHeroEntity>,
  ) {}
  async create(createHireDto: CreateHireDto): Promise<ResponseDTO> {
    const { heroID, firstName, lastName } = createHireDto;

    const response = await this.hireHeroEntity.query('CALL hireHero(?, ?, ?)', [
      heroID,
      firstName,
      lastName,
    ]);

    return Promise.resolve(response[0][0]);
  }

  findAll() {
    return `This action returns all hire`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hire`;
  }

  remove(id: number) {
    return `This action removes a #${id} hire`;
  }
}
