import { IsNotEmpty } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateBoardRequest {
  @Field(() => String)
  @IsNotEmpty()
  boardName: string;

  constructor(boardName: string) {
    this.boardName = boardName;
  }

  static testInstance(boardName) {
    return new CreateBoardRequest(boardName);
  }
}
