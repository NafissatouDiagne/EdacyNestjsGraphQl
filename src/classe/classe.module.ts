import { Module } from '@nestjs/common';
import { ClasseService } from './classe.service';
import { ClasseController } from './classe.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClasseResolver } from './classe.resolver';
import { ClasseModel } from './classe.model';

@Module({
  imports: [TypeOrmModule.forFeature([ClasseModel])],
  providers: [ClasseService, ClasseResolver],
  controllers: [ClasseController],
})
export class ClasseModule {}
