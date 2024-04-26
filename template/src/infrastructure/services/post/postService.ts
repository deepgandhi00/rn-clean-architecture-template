// TODO: sample service definition
import {ResponseModel} from '../../../domain/entities/generics/genericResponseModel.entity';
import {Post} from '../../../domain/entities/post/posts.entity';

export interface PostService {
  getPosts(): Promise<ResponseModel<Post[]>>;
}
