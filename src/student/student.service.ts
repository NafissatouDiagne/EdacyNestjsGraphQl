import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StudentModel } from './student.model';
import { Repository } from 'typeorm';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(StudentModel)
    private studentRepository: Repository<StudentModel>,
  ) {}
  findAll(): Promise<StudentModel[]> {
    return this.studentRepository.find();
  }
  findOne(id: string): Promise<StudentModel> {
    return this.studentRepository.findOne({ where: { id: +id } });
  }
  async create(student: StudentModel): Promise<StudentModel> {
    return await this.studentRepository.save(student);
  }
  async update(id: string, student: StudentModel): Promise<void> {
    await this.studentRepository.update(id, student);
  }
  async remove(id: string): Promise<void> {
    await this.studentRepository.delete(id);
  }
}
