import { Resolver, Query, Args, Mutation, Int } from '@nestjs/graphql';

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
  async createClasse(@Args('name') name: string): Promise<ClasseModel> {
    return this.classeService.create({
      name,
      id: 0,
    });
  }
  @Mutation(() => ClasseModel)
  async updateClass(
    @Args('id') id: string,
    @Args('name') name: string,
  ): Promise<ClasseModel> {
    return this.classeService.update(id, name);
  }

  @Mutation(() => ClasseModel)
  async removeClasse(
    @Args('id', { type: () => Int }) id: string,
  ): Promise<void> {
    this.classeService.remove(id);
  }
}
