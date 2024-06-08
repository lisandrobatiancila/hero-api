import { Injectable } from '@nestjs/common';
import { CreateLoginDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/shared/user.entity.dto';
import { Repository } from 'typeorm';

@Injectable()
export class LoginService {
  constructor(@InjectRepository(UserEntity) private userEntity: Repository<UserEntity>) {}
  
  create(loginUserDTO: LoginDTO) {
    const {
      email,
      password,
    } = loginUserDTO;

    this.userEntity.query('call heroe.loginUser(email, password)', [email, password]);

    return 'This action adds a new login';
  }

  findAll() {
    return `This action returns all login`;
  }

  findOne(id: number) {
    return `This action returns a #${id} login`;
  }

  update(id: number, updateLoginDto: UpdateLoginDto) {
    return `This action updates a #${id} login`;
  }

  remove(id: number) {
    return `This action removes a #${id} login`;
  }
}
