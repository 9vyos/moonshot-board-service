import { IsNotEmpty } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreatePostCategoryRequest {
  @Field(() => String)
  @IsNotEmpty()
  categoryName: string;
}
