import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { HireService } from './hire.service';
import { CreateHireDto, RemoveHeroDTO } from './dto/create-hire.dto';

@Controller('hire')
export class HireController {
  constructor(private readonly hireService: HireService) {}

  @Post()
  create(@Body() createHireDto: CreateHireDto) {
    return this.hireService.create(createHireDto);
  }

  @Get('/all-hired-hero/:userId')
  getAllHiredHero(@Param('userId') userId: number) {
    return this.hireService.getAllHiredHero(userId);
  }

  @Post('/remove-hero')
  removeHero(@Body() param: RemoveHeroDTO) {
    return this.hireService.removeHero(param);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hireService.findOne(+id);
  }
}
