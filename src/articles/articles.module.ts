import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticlesService } from './articles.service';
import { ArticlesController } from './articles.controller';
import { Article } from './entity/article.entity';
import { PostCategory } from './entity/post.category.entity';
import { Board } from './entity/board.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Article, PostCategory, Board])],
  providers: [ArticlesService],
  controllers: [ArticlesController],
})
export class ArticlesModule {}
