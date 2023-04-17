import { Field, ObjectType } from '@nestjs/graphql';
import { PostCategory } from '../../entity/post.category.entity';

@ObjectType()
export class PostCategoryInfoResponse {
  @Field(() => Number)
  postCategoryId: number;
  @Field(() => String)
  categoryName: string;

  constructor(postCategoryId: number, categoryName: string) {
    this.postCategoryId = postCategoryId;
    this.categoryName = categoryName;
  }

  static of(category: PostCategory) {
    return new PostCategoryInfoResponse(
      category.postCategoryId,
      category.categoryName,
    );
  }
}
