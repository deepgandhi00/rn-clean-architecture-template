// TODO: sample api service implementation
import {ResponseModel} from '../../../domain/entities/generics/genericResponseModel.entity';
import {Post} from '../../../domain/entities/post/posts.entity';
import {PostService} from './postService';
import {HttpService} from '../../http/httpService';
import {inject, injectable} from 'inversify';

@injectable()
export class PostApiServiceImpl implements PostService {
  httpService: HttpService;

  constructor(@inject(HttpService) httpService: HttpService) {
    this.httpService = httpService;
  }

  async getPosts(): Promise<ResponseModel<Post[]>> {
    return await this.httpService.get<Post[]>('/posts');
  }
}
