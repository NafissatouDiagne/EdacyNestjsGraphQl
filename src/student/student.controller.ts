import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { StudentModel } from './student.model';
import { StudentService } from './student.service';

@Controller('Student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  findAll(): Promise<StudentModel[]> {
    return this.studentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<StudentModel> {
    return this.studentService.findOne(id);
  }

  @Post()
  create(@Body() student: StudentModel): void {
    this.studentService.create(student);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() student: StudentModel): void {
    this.studentService.update(String(id), student);
  }

  @Delete(':id')
  remove(@Param('id') id: string): void {
    this.studentService.remove(String(id));
  }
}
