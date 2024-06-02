import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { ClasseService } from './classe.service';
import { ClasseModel } from './classe.model';

@Controller('classe')
export class ClasseController {
  constructor(private readonly classeService: ClasseService) {}

  @Get()
  findAll(): Promise<ClasseModel[]> {
    return this.classeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<ClasseModel> {
    return this.classeService.findOne(id);
  }

  @Post()
  create(@Body() classe: ClasseModel): void {
    this.classeService.create(classe);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() classe: string): void {
    this.classeService.update(String(id), classe);
  }

  @Delete(':id')
  remove(@Param('id') id: string): void {
    this.classeService.remove(id);
  }
}
