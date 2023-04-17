import { BadRequestException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Board } from './entity/board.entity';
import { PostCategory } from './entity/post.category.entity';

export class ArticleServiceUtils {
  static async validateBoard(
    boardRepository: Repository<Board>,
    boardName: string,
  ) {
    const board = await boardRepository.findOneBy({
      boardName,
    });
    if (board != null) {
      throw new BadRequestException('이미 존재하는 게시판입니다.');
    }
  }

  static async validateCategory(
    categoryRepository: Repository<PostCategory>,
    categoryName: string,
  ) {
    const category = await categoryRepository.findOneBy({
      categoryName,
    });
    if (category != null) {
      throw new BadRequestException('이미 존재하는 카테고리입니다.');
    }
  }
}
