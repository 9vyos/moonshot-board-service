import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticlesService } from './articles.service';
import { ArticlesController } from './articles.controller';
import { Article } from './entity/article.entity';
import { PostCategory } from './entity/post.category.entity';
import { Board } from './entity/board.entity';
import { ArticlesResolver } from './articles.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Article, PostCategory, Board])],
  providers: [ArticlesService, ArticlesResolver],
  controllers: [ArticlesController],
})
export class ArticlesModule {}
