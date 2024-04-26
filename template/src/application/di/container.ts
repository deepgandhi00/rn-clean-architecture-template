import 'reflect-metadata';
import {Container} from 'inversify';
import {buildProviderModule} from 'inversify-binding-decorators';
import {HttpClient} from '../../infrastructure/http/httpClient';
import {HttpService} from '../../infrastructure/http/httpService';
import TYPES from './types';
import {PostRepositoryImpl} from '../../infrastructure/respository/post/postRepositoryImpl';
import {PostRepository} from '../../infrastructure/respository/post/postRepository';
import {PostService} from '../../infrastructure/services/post/postService';
import {PostApiServiceImpl} from '../../infrastructure/services/post/postApiServiceImpl';

const container = new Container();
container.bind<HttpClient>(HttpClient).toSelf().inSingletonScope();
container.bind<HttpService>(HttpService).toSelf().inSingletonScope();
container
  .bind<PostRepository>(TYPES.POST_API_REPOSITORY)
  .to(PostRepositoryImpl)
  .inSingletonScope();
container
  .bind<PostService>(TYPES.POST_API_SERVICE)
  .to(PostApiServiceImpl)
  .inSingletonScope();
export {container};
