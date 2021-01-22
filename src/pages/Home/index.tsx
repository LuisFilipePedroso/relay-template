import React from 'react';

import {Container, Button, PlusIcon} from './styles';
import TweetsList from '../../components/TweetsList';

const Home = () => {
  return (
    <Container>
      <TweetsList />
      <Button onPress={() => {}}>
        <PlusIcon />
      </Button>
    </Container>
  );
};

export default Home;
