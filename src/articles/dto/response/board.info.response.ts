import { Board } from '../../entity/board.entity';

export class BoardInfoResponse {
  boardId: number;
  boardName: string;

  constructor(boardId: number, boardName: string) {
    this.boardId = boardId;
    this.boardName = boardName;
  }

  static of(board: Board) {
    return new BoardInfoResponse(board.boardId, board.boardName);
  }
}
