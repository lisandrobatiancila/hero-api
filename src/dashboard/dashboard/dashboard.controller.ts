import { Controller, Get, Post, Patch, Param, Delete } from '@nestjs/common';
import { DashboardService } from './dashboard.service';

@Controller('dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Post()
  create() {
    return this.dashboardService.create();
  }

  @Get()
  findAll() {
    return this.dashboardService.getAllHeroes();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dashboardService.findOne(+id);
  }

  @Patch(':id')
  update() {
    return this.dashboardService.update();
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dashboardService.remove(+id);
  }
}
