import { Get, Controller, Render, Post, Body } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { Article } from './article.entity';

@Controller('/')
export class ArticlesController {
    constructor(private readonly ArticleService: ArticlesService) { }

    @Get('/')
    async index(): Promise<Article[]> {
        console.log(await this.ArticleService.findAll())
        return (await this.ArticleService.findAll()).reverse()
    }

    //   @Get('/')
    //   @Render('Articles_index')
    // async index() {
    //     let Articles = await this.ArticleService.findAll();
    //     return { Articles: Articles }
    // }

    // RESTFul API
    @Get('articles')
    async findAll(): Promise<Article[]> {
        return (await this.ArticleService.findAll()).reverse()
    }
    @Post('articles')
    async create(@Body() Article: Article): Promise<Article> {
        console.log(Article)
        return this.ArticleService.create(Article);
    }
}