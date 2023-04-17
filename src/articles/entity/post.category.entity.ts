import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PostCategory {
  @PrimaryGeneratedColumn()
  postCategoryId: number;

  @Column({
    nullable: false,
  })
  categoryName: string;

  constructor(categoryName: string) {
    this.categoryName = categoryName;
  }

  static newCategory(categoryName: string) {
    return new PostCategory(categoryName);
  }
}
