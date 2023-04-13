import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  boardId: number;

  @Column({
    nullable: false,
  })
  categoryName: string;
}
