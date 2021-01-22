import styled from 'styled-components/native';

import PlusSVG from '../../assets/icons/plus.svg';
import {AppColors} from '../../styles/global';

export const Container = styled.View`
  flex: 1;
  background-color: #ebeef0;
  padding: 0 20px;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9,
})`
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  background-color: ${AppColors.PRIMARY};
  position: absolute;
  right: 16px;
  bottom: 0;
`;

export const PlusIcon = styled(PlusSVG)`
  width: 22px;
  height: 22px;
  color: #fff;
`;
