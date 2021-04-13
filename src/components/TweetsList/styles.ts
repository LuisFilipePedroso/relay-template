import styled from 'styled-components/native';

import HeartSVG from '../../assets/icons/heart.svg';
import HeartFilledSVG from '../../assets/icons/heart-filled.svg';
import {AppColors} from "../../styles/global";

export const TweetContainer = styled.View`
  flex-grow: 1;
  background-color: #fff;
  padding: 16px;
  margin-top: 16px;
  border-radius: 8px;
`;

export const Header = styled.View`
  flex-direction: row;
  flex-shrink: 0;
`;

export const Text = styled.Text<{bold?: boolean}>`
  font-family: 'HelveticaNeue-Light';
  font-size: 18px;

  ${(props) =>
    props.bold &&
    `
    font-weight: bold;
  `}
`;

export const SubText = styled(Text)`
  color: #707070;
  margin-left: 16px;
`;

export const Content = styled.View`
  flex-grow: 1;
  margin-top: 8px;
`;

export const LikesButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9,
})`
  flex-direction: row;
  margin-top: 8px;
`;

export const HeartIcon = styled(HeartSVG)`
  width: 16px;
  height: 16px;
  color: #707070;
`;

export const HeartFilledIcon = styled(HeartFilledSVG)`
  width: 16px;
  height: 16px;
  color: ${AppColors.PRIMARY};
`;
