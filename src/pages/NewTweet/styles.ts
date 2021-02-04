import styled from 'styled-components/native';
import {AppColors} from '../../styles/global';

export const Container = styled.View`
  flex: 1;
  background-color: ${AppColors.GRAY};
  padding: 0 16px;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  flex-shrink: 0;
  justify-content: space-between;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})<{noBg?: boolean}>`
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 35px;
  border-radius: 35px;
  background-color: ${AppColors.PRIMARY};

  ${(props) =>
    props.noBg &&
    `
    background-color: transparent;
    color: ${AppColors.PRIMARY};
  `}
`;

export const ButtonText = styled.Text<{noBg?: boolean}>`
  color: white;
  font-family: 'HelveticaNeue-Light';
  font-size: 16px;

  ${(props) =>
    props.noBg &&
    `
    color: ${AppColors.PRIMARY};
  `}
`;

export const Content = styled.View`
  flex: 1;
  padding-top: 16px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#abb7bf',
  selectionColor: AppColors.PRIMARY,
})`
  flex-grow: 1;
  font-family: 'HelveticaNeue-Light';
  font-size: 16px;
`;
