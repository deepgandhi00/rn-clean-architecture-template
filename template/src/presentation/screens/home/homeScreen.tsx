import React, {useEffect} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {Post} from '../../../domain/entities/post/posts.entity';
import {ResponseModel} from '../../../domain/entities/generics/genericResponseModel.entity';
import {useInjection} from 'inversify-react';
import {PostRepository} from '../../../infrastructure/respository/post/postRepository';
import TYPES from '../../../application/di/types';

const HomeScreen = (): React.ReactElement => {
  let postRepository = useInjection<PostRepository>(TYPES.POST_API_REPOSITORY);
  useEffect(() => {
    postRepository
      .getPosts()
      .then((response: ResponseModel<Post[]>) => {
        console.log(response.data);
      })
      .catch((error: any) => {});
    // console.log(postRepository);
  }, []);

  return (
    <SafeAreaView>
      <View>
        <Text>Home</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
