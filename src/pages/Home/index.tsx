import React from 'react';

import {StackNavigationProp} from '@react-navigation/stack';
import {ParamListBase} from '@react-navigation/native';

import TweetsList from '../../components/TweetsList';
import {Container, Button, PlusIcon} from './styles';

type Props = {
  navigation: StackNavigationProp<ParamListBase>;
};

const Home = ({ navigation }: Props) => {
  return (
    <Container>
      <TweetsList />
      <Button onPress={() => navigation.navigate('NewTweet')}>
        <PlusIcon />
      </Button>
    </Container>
  );
};

export default Home;
