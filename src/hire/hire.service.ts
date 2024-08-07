import { Injectable } from '@nestjs/common';
import { CreateHireDto, RemoveHeroDTO } from './dto/create-hire.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { HireHeroEntity } from 'src/shared-entity/hero.entity';
import { Repository } from 'typeorm';
import { ResponseDTO } from 'src/shared-dto/response';
import { HeroDTO } from 'src/dashboard/dashboard/dto/hero.dto';
import { DB_INSTANCE } from 'src/shared-entity/db';

@Injectable()
export class HireService {
  constructor(
    @InjectRepository(HireHeroEntity)
    private hireHeroEntity: Repository<HireHeroEntity>,
  ) {}
  async create(createHireDto: CreateHireDto): Promise<undefined> {
    const { heroID, userId, firstName, lastName } = createHireDto;

    const response = await this.hireHeroEntity.query(
      'CALL hireHero(?, ?, ?, ?)',
      [heroID, userId, firstName, lastName],
    );
    const responseAPI = response[0][0];
    responseAPI.genericDTO = undefined;

    return Promise.resolve(responseAPI);
  }

  async getAllHiredHero(userId: number): Promise<ResponseDTO<HeroDTO[]>> {
    const response = await this.hireHeroEntity.query(
      `CALL getAllPersonalHiredHero(?)`,
      [userId],
    );

    return new Promise((resolve) => {
      resolve({
        code: 200,
        message: 'List of hired heroes',
        genericDTO: response[0],
      });
    });
  }

  async removeHero(param: RemoveHeroDTO): Promise<ResponseDTO> {
    const { heroId, userId } = param;
    const dbResponse = await this.hireHeroEntity.query(
      `CALL ${DB_INSTANCE}.removeHiredHero(?, ?)`,
      [heroId, userId],
    );

    const apiResponse = dbResponse[0][0];
    apiResponse.genericDTO = {};

    return apiResponse;
  }

  findOne(id: number) {
    return `This action returns a #${id} hire`;
  }

  remove(id: number) {
    return `This action removes a #${id} hire`;
  }
}
