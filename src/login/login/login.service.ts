import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/shared-entity/user.entity.dto';
import { Repository } from 'typeorm';
import { LoginDTO } from './dto/login.dto';
import { ResponseDTO } from 'src/shared-dto/response';

@Injectable()
export class LoginService {
  constructor(
    @InjectRepository(UserEntity) private userEntity: Repository<UserEntity>,
  ) {}

  async create(loginUserDTO: LoginDTO): Promise<ResponseDTO> {
    const { email, password } = loginUserDTO;
    
    const response = await this.userEntity.query('CALL heroes.loginUser(?, ?)', [
      email,
      password,
    ]);
    const responseObject = response[0][0] as ResponseDTO;
    console.log(responseObject);
    
    return new Promise((resolve, reject) => {
      resolve({
        code: responseObject.code,
        message: responseObject.message,
      })
    });
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
