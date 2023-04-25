import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ArticlesService } from './articles.service';
import { CreateBoardRequest } from './dto/request/create.board.request';
import { BoardInfoResponse } from './dto/response/board.info.response';
import { PostCategoryInfoResponse } from './dto/response/post.category.info.response';
import { CreatePostCategoryRequest } from './dto/request/create.post.category.request';
import { PagingPostCategoryRequest } from './dto/request/paging.post-category.request';

@Resolver()
export class ArticlesResolver {
  constructor(private readonly articlesService: ArticlesService) {}

  @Query(() => String)
  articleHello() {
    return 'Hello from article resolver';
  }

  @Mutation(() => BoardInfoResponse)
  async createBoard(@Args('request') request: CreateBoardRequest) {
    return await this.articlesService.createBoard(request);
  }

  @Query(() => [BoardInfoResponse])
  async retrieveBoard() {
    return await this.articlesService.retrieveBoard();
  }

  @Mutation(() => PostCategoryInfoResponse)
  async createCategory(@Args('request') request: CreatePostCategoryRequest) {
    return await this.articlesService.createCategory(request);
  }

  @Query(() => [PostCategoryInfoResponse])
  async retrieveCategory(request: PagingPostCategoryRequest) {
    return await this.articlesService.retrieveCategory(request);
  }
}
