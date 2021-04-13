import React, { useMemo } from 'react';
import {FlatList} from 'react-native';
import {Tweet as ITweet} from "../../modules/models";

// eslint-disable-next-line import/no-duplicates
import {formatDistance} from 'date-fns';
// eslint-disable-next-line import/no-duplicates
import {ptBR} from 'date-fns/locale';

import {
  Content,
  Header,
  LikesButton,
  HeartIcon,
  HeartFilledIcon,
  SubText,
  Text,
  TweetContainer,
} from './styles';

type LikeTweet = {
  id: number;
}

const Tweet = ({tweet}: { tweet: ITweet }) => {

  const formattedDate = useMemo(
    () =>
      `à ${formatDistance(new Date(tweet.createdAt as Date), new Date(), {
        locale: ptBR,
      })}`,
    [tweet?.createdAt],
  );

  return (
    <TweetContainer>
      <Header>
        <Text bold>{tweet.author}</Text>
        <SubText>{formattedDate}</SubText>
      </Header>
      {tweet.message?.length > 0 && (
        <Content>
          <Text>{tweet.message}</Text>
        </Content>
      )}
      <LikesButton onPress={() => {}}>
        { tweet.hasLiked ? <HeartFilledIcon /> : <HeartIcon />}
        <SubText>{tweet.likes}</SubText>
      </LikesButton>
    </TweetContainer>
  );
};

const TweetsList = () => {

  return (
    <FlatList
      data={[]}
      renderItem={({item}) => <Tweet tweet={item} />}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default TweetsList;
