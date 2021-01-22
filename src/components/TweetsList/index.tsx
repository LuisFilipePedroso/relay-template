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
  LikesIcon,
  SubText,
  Text,
  TweetContainer,
} from './styles';

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
      {tweet.description?.length > 0 && (
        <Content>
          <Text>{tweet.description}</Text>
        </Content>
      )}
      <LikesButton onPress={() => {}}>
        <LikesIcon />
        <SubText>{tweet.likes}</SubText>
      </LikesButton>
    </TweetContainer>
  );
};

const TweetsList = () => {

  const tweets = [
    {
      id: '1',
      author: 'Luis',
      createdAt: new Date('2021-01-10T17:00:00Z'),
      updatedAt: new Date('2021-01-10T17:00:00Z'),
      description: 'Primeiro projeto com o relay',
      likes: 2
    }
  ];

  return (
    <FlatList
      data={tweets}
      renderItem={({item}) => <Tweet tweet={item} />}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default TweetsList;
