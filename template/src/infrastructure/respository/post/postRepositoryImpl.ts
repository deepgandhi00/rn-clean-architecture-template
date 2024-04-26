// TODO: sample api implementation for post repository
import {PostRepository} from './postRepository';
import {ResponseModel} from '../../../domain/entities/generics/genericResponseModel.entity';
import {Post} from '../../../domain/entities/post/posts.entity';
import type {PostService} from '../../services/post/postService';
import TYPES from '../../../application/di/types';
import {inject, injectable} from 'inversify';

@injectable()
export class PostRepositoryImpl implements PostRepository {
  postService: PostService;

  constructor(@inject(TYPES.POST_API_SERVICE) postService: PostService) {
    this.postService = postService;
  }

  getPosts(): Promise<ResponseModel<Post[]>> {
    return this.postService.getPosts();
  }
}
