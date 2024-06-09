import { Injectable } from '@nestjs/common';
import { CreateSignupDto } from './dto/create-signup.dto';
import { UpdateSignupDto } from './dto/update-signup.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/shared/user.entity.dto';
import { Repository } from 'typeorm';

type MysqlDTO = {
  message: string;
  code: number;
};
@Injectable()
export class SignupService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}
  async create(createSignupDto: CreateSignupDto): Promise<MysqlDTO> {
    const { firstname, lastname, email, password, registerType } =
      createSignupDto;
    const response = await this.userRepository.query(
      'call hero.createAccount(?, ?, ?, ?, ?)',
      [firstname, lastname, email, password, registerType],
    );
    const responseMessage = response[0][0] as MysqlDTO;
    
    return { message: responseMessage?.message, code: responseMessage.code };
  }

  findAll() {
    return `This action returns all signup`;
  }

  findOne(id: number) {
    return `This action returns a #${id} signup`;
  }

  update(id: number, updateSignupDto: UpdateSignupDto) {
    return `This action updates a #${id} signup`;
  }

  remove(id: number) {
    return `This action removes a #${id} signup`;
  }
}
