import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Article } from './article.entity';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(Article)
    private ArticlesRepository: Repository<Article>,
  ) {}

  findAll(): Promise<Article[]> {
    return this.ArticlesRepository.find();
  }

  findOne(postId: number): Promise<Article | null> {
    return this.ArticlesRepository.findOneBy({ postId });
  }

  async remove(id: number): Promise<void> {
    await this.ArticlesRepository.delete(id);
  }

  async create(Article: Article): Promise<Article> {
    return this.ArticlesRepository.save(Article);
  }
}
