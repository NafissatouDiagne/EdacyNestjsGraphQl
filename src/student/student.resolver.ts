import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { StudentService } from './student.service';
import { StudentModel } from './student.model';

@Resolver(() => StudentModel)
export class StudentResolver {
  constructor(private studentService: StudentService) {}

  @Query(() => [StudentModel])
  async students(): Promise<StudentModel[]> {
    return this.studentService.findAll();
  }
  @Query(() => StudentModel)
  async student(@Args('id') id: string): Promise<StudentModel> {
    return this.studentService.findOne(id);
  }
  @Mutation(() => StudentModel)
  async createStudent(
    @Args('name') name: string,
    @Args('email') email: string,
    @Args('classe') classe: string,
  ): Promise<StudentModel> {
    return this.studentService.create({
      name,
      email,
      classe,
      id: 0,
    });
  }
  @Mutation(() => StudentModel)
  async updateStudent(
    @Args('id') id: string,
    @Args('name') name: string,
    @Args('email') email: string,
    @Args('classe') classe: string,
  ): Promise<StudentModel> {
    return this.studentService.update(id, {
      name,
      email,
      classe,
      id: 0,
    });
  }
  @Mutation(() => StudentModel)
  async removeStudent(
    @Args('id', { type: () => Int }) id: string,
  ): Promise<void> {
    this.studentService.remove(id);
  }
}
