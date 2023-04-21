import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Board {
  @PrimaryGeneratedColumn()
  boardId: number;

  @Column({
    nullable: false,
  })
  boardName: string;

  constructor(boardName: string) {
    this.boardName = boardName;
  }

  static newBoard(name: string) {
    return new Board(name);
  }

  static mockInstance() {
    return new Board('test');
  }
}
