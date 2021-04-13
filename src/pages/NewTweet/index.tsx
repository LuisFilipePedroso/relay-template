import React, {useState} from 'react';

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

const LOGGED_USER_ID = 'Luis';

type CreateTweet = {
  message: string;
}

const NewTweet = ({ navigation }: Props) => {
  const [text, setText] = useState('');

  return (
    <Container>
      <ButtonsContainer>
        <Button noBg onPress={() => navigation.goBack()}>
          <ButtonText noBg>Cancelar</ButtonText>
        </Button>
        <Button onPress={() => {}}>
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
