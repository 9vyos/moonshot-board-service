import { IsNotEmpty } from 'class-validator';

export class CreateBoardRequest {
  @IsNotEmpty()
  boardName: string;
}
