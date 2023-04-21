import { ArticlesService } from './articles.service';
import { Test, TestingModule } from '@nestjs/testing';
import { Article } from './entity/article.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Board } from './entity/board.entity';
import { PostCategory } from './entity/post.category.entity';
import { Repository } from 'typeorm';

describe('ArticleService', () => {
  let service: ArticlesService;
  let articleRepository: Repository<Article>;
  let boardRepository: Repository<Board>;
  let postCategoryRepository: Repository<PostCategory>;

  const ARTICLE_REPOSITORY_TOKEN = getRepositoryToken(Article);
  const BOARD_REPOSITORY_TOKEN = getRepositoryToken(Board);
  const POST_CATEGORY_REPOSITORY_TOKEN = getRepositoryToken(PostCategory);

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ArticlesService,
        {
          provide: ARTICLE_REPOSITORY_TOKEN,
          useValue: {
            find: jest.fn().mockResolvedValue([]),
            save: jest.fn(),
            findOne: jest.fn(),
            findOneBy: jest.fn(),
          },
        },
        {
          provide: getRepositoryToken(Board),
          useValue: {
            find: jest.fn().mockResolvedValue([]),
            save: jest.fn().mockResolvedValue(Board.mockInstance()),
          },
        },
        {
          provide: getRepositoryToken(PostCategory),
          useValue: {
            find: jest.fn().mockResolvedValue([]),
            save: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<ArticlesService>(ArticlesService);
    articleRepository = module.get<Repository<Article>>(
      ARTICLE_REPOSITORY_TOKEN,
    );
    boardRepository = module.get<Repository<Board>>(BOARD_REPOSITORY_TOKEN);
    postCategoryRepository = module.get<Repository<PostCategory>>(
      POST_CATEGORY_REPOSITORY_TOKEN,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('board repository should be defined', () => {
    expect(boardRepository).toBeDefined();
  });

  describe('boardTest', function () {
    it('should return board list', async function () {
      const result = await service.retrieveBoard();
      expect(result).toBeInstanceOf(Array);
    });
  });
});
