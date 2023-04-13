import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticlesService } from './articles.service';
import { ArticlesController } from './articles.controller';
import { Article } from './entity/article.entity';
import { Category } from './entity/category.entity';
import { Board } from './entity/board.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Article, Category, Board])],
  providers: [ArticlesService],
  controllers: [ArticlesController],
})
export class ArticlesModule {}
