import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  postId: number;

  @Column({
    nullable: false,
  })
  boardId: number;

  @Column({
    nullable: false,
  })
  postTitle: string;

  @Column({
    type: 'text',
  })
  postContent: string | null;

  @Column()
  postCategory: string;

  @Column()
  userId: number;
}
