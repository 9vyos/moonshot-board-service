import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Article } from './entity/article.entity';
import { CreateBoardRequest } from './dto/request/create.board.request';
import { Board } from './entity/board.entity';
import { ArticleServiceUtils } from './article.service.utils';
import { BoardInfoResponse } from './dto/response/board.info.response';
import { CreatePostCategoryRequest } from './dto/request/create.post.category.request';
import { PostCategory } from './entity/post.category.entity';
import { PostCategoryInfoResponse } from './dto/response/post.category.info.response';
import { Transactional } from 'typeorm-transactional';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(Article)
    private articlesRepository: Repository<Article>,
    @InjectRepository(Board)
    private boardRepository: Repository<Board>,
    @InjectRepository(PostCategory)
    private categoryRepository: Repository<PostCategory>,
  ) {}

  findAll(): Promise<Article[]> {
    return this.articlesRepository.find();
  }

  findOne(postId: number): Promise<Article | null> {
    return this.articlesRepository.findOneBy({ postId });
  }

  async remove(id: number): Promise<void> {
    await this.articlesRepository.delete(id);
  }

  async create(Article: Article): Promise<Article> {
    return this.articlesRepository.save(Article);
  }

  @Transactional()
  async createBoard(request: CreateBoardRequest) {
    await ArticleServiceUtils.validateBoard(
      this.boardRepository,
      request.boardName,
    );
    const board = await this.boardRepository.save(
      Board.newBoard(request.boardName),
    );
    return BoardInfoResponse.of(board);
  }

  async retrieveBoard() {
    const boardList = await this.boardRepository.find();
    return boardList.map((board) => BoardInfoResponse.of(board));
  }

  @Transactional()
  async createCategory(request: CreatePostCategoryRequest) {
    await ArticleServiceUtils.validateCategory(
      this.categoryRepository,
      request.categoryName,
    );
    const category = await this.categoryRepository.save(
      PostCategory.newCategory(request.categoryName),
    );
    return PostCategoryInfoResponse.of(category);
  }

  async retrieveCategory() {
    const categoryList = await this.categoryRepository.find();
    return categoryList.map((category) =>
      PostCategoryInfoResponse.of(category),
    );
  }
}
