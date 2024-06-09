import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/shared/user.entity.dto';
import { Repository } from 'typeorm';
import { LoginDTO } from './dto/login.dto';

@Injectable()
export class LoginService {
  constructor(
    @InjectRepository(UserEntity) private userEntity: Repository<UserEntity>,
  ) {}

  create(loginUserDTO: LoginDTO) {
    const { email, password } = loginUserDTO;

    this.userEntity.query('call heroe.loginUser(email, password)', [
      email,
      password,
    ]);

    return 'This action adds a new login';
  }

  findAll() {
    return `This action returns all login`;
  }

  findOne(id: number) {
    return `This action returns a #${id} login`;
  }

  update(id: number) {
    return `This action updates a #${id} login`;
  }

  remove(id: number) {
    return `This action removes a #${id} login`;
  }
}
