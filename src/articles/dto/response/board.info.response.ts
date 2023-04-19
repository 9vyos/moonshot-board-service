import { Board } from '../../entity/board.entity';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class BoardInfoResponse {
  @Field(() => Number)
  boardId: number;
  @Field(() => String)
  boardName: string;

  constructor(boardId: number, boardName: string) {
    this.boardId = boardId;
    this.boardName = boardName;
  }

  static of(board: Board) {
    return new BoardInfoResponse(board.boardId, board.boardName);
  }
}
