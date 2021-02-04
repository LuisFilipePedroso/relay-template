import React, { useCallback, useState } from 'react';

import { StackNavigationProp } from '@react-navigation/stack';
import { ParamListBase } from '@react-navigation/native';


import {
  Container,
  ButtonsContainer,
  Button,
  ButtonText,
  Content,
  Input,
} from './styles';

type Props = {
  navigation: StackNavigationProp<ParamListBase>;
};

const LOGGED_USER_ID = '600617c08fda4b3d6ac2409e';

const NewTweet = ({ navigation }: Props) => {
  const [text, setText] = useState('');

  const handleCreateTweet = useCallback(async () => { }, []);

  return (
    <Container>
      <ButtonsContainer>
        <Button noBg onPress={() => navigation.goBack()}>
          <ButtonText noBg>Cancelar</ButtonText>
        </Button>
        <Button onPress={() => handleCreateTweet()}>
          <ButtonText>Tweet</ButtonText>
        </Button>
      </ButtonsContainer>
      <Content>
        <Input
          multiline
          placeholder="O que está acontecendo?"
          value={text}
          onChangeText={setText}
        />
      </Content>
    </Container>
  );
};

export default NewTweet;
