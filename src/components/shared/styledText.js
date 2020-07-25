import styled from 'styled-components/native';
import {typography, color, space} from 'styled-system';

export const Text = styled.Text`
  ${space};
  ${typography};
  ${color};
  ${(props) => props.light && `font-family:SFProText-Light`}
  ${(props) => props.bold && `font-family:SFProText-Bold`}
  ${(props) => props.medium && `font-family:SFProText-Medium`}
  ${(props) => props.regular && `font-family:SFProText-Regular`}
  ${(props) => props.semibold && `font-family:SFProText-Semibold`}
`;
