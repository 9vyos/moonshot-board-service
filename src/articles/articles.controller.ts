import {
  Get,
  Controller,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { Article } from './entity/article.entity';
import { CreateBoardRequest } from './dto/request/create.board.request';
import { ApiResponse } from '../common/response/api.response';

@Controller('/')
export class ArticlesController {
  constructor(private readonly articleService: ArticlesService) {}

  @Get('/')
  async index(): Promise<Article[]> {
    console.log(await this.articleService.findAll());
    return (await this.articleService.findAll()).reverse();
  }

  //   @Get('/')
  //   @Render('Articles_index')
  // async index() {
  //     let Articles = await this.articleService.findAll();
  //     return { Articles: Articles }
  // }

  // RESTFul API
  @Get('articles')
  async findAll(): Promise<Article[]> {
    return (await this.articleService.findAll()).reverse();
  }

  @Post('articles')
  async create(@Body() Article: Article): Promise<Article> {
    console.log(Article);
    return this.articleService.create(Article);
  }

  @Post('board')
  @UsePipes(new ValidationPipe())
  async createBoard(@Body() request: CreateBoardRequest) {
    return ApiResponse.success(await this.articleService.createBoard(request));
  }

  @Get('board')
  async retrieveBoard() {
    return ApiResponse.success(await this.articleService.retrieveBoard());
  }
}
