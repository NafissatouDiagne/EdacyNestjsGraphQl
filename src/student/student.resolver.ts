import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
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
  async createStudent(@Args('name') name: string): Promise<StudentModel> {
    return this.studentService.create({
      name,
      id: 0,
    });
  }
}
