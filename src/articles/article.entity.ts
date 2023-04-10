import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Article {

    @PrimaryGeneratedColumn()
    postId: number;

    @Column()
    boardId: number;

    @Column()
    postTitle: string;

    @Column()
    postContent: string | null;

    @Column()
    postCategory: string;

    @Column()
    userId: number;
}
