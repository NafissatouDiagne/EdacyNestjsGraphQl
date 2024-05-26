import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';

import { ClasseService } from './classe.service';
import { ClasseModel } from './classe.model';

@Resolver(() => ClasseModel)
export class ClasseResolver {
  constructor(private classeService: ClasseService) {}

  @Query(() => [ClasseModel])
  async classes(): Promise<ClasseModel[]> {
    return this.classeService.findAll();
  }

  @Query(() => ClasseModel)
  async classe(@Args('id') id: string): Promise<ClasseModel> {
    return this.classeService.findOne(id);
  }
  @Mutation(() => ClasseModel)
  async createClasse(
    @Args('name') name: string,
    @Args('description') description: string,
  ): Promise<ClasseModel> {
    return this.classeService.create({
      name,
      description,
      id: 0,
    });
  }
}
