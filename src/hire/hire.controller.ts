import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { HireService } from './hire.service';
import { CreateHireDto } from './dto/create-hire.dto';

@Controller('hire')
export class HireController {
  constructor(private readonly hireService: HireService) {}

  @Post()
  create(@Body() createHireDto: CreateHireDto) {
    return this.hireService.create(createHireDto);
  }

  @Get()
  findAll() {
    return this.hireService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hireService.findOne(+id);
  }

}
