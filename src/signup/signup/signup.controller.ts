import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SignupService } from './signup.service';
import { CreateSignupDto } from './dto/create-signup.dto';
import { UpdateSignupDto } from './dto/update-signup.dto';

@Controller('signup')
export class SignupController {
  constructor(private readonly signupService: SignupService) {}

  @Post()
  async create(
    @Body() createSignupDto: CreateSignupDto,
  ): Promise<{ message: string; code: number }> {
    
    const response = await this.signupService.create(createSignupDto);
    
    return response;
  }

  @Get()
  findAll() {
    return this.signupService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.signupService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSignupDto: UpdateSignupDto) {
    return this.signupService.update(+id, updateSignupDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.signupService.remove(+id);
  }
}
