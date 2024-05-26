import { Module } from '@nestjs/common';
import { StudentModel } from './student.model';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentService } from './student.service';
import { StudentResolver } from './student.resolver';
import { StudentController } from './student.controller';

@Module({
  imports: [TypeOrmModule.forFeature([StudentModel])],
  providers: [StudentService, StudentResolver],
  controllers: [StudentController],
})
export class StudentModule {}
