import { Injectable } from '@nestjs/common';
import { ClasseModel } from './classe.model';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ClasseService {
  constructor(
    @InjectRepository(ClasseModel)
    private classeRepository: Repository<ClasseModel>,
  ) {}

  findAll(): Promise<ClasseModel[]> {
    return this.classeRepository.find();
  }

  findOne(id: string): Promise<ClasseModel> {
    return this.classeRepository.findOne({ where: { id: +id } });
  }

  async create(classe: ClasseModel): Promise<ClasseModel> {
    return await this.classeRepository.save(classe);
  }

  async update(id: string, name: string): Promise<ClasseModel> {
    const classe = await this.classeRepository.findOne({ where: { id: +id } });
    if (!classe) {
      throw new Error('Classe not found');
    }
    classe.name = name;
    return this.classeRepository.save(classe);
  }

  async remove(id: string): Promise<void> {
    await this.classeRepository.delete(id);
  }
}
