import { IsNotEmpty } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateBoardRequest {
  @Field(() => String)
  @IsNotEmpty()
  boardName: string;
}
