import {Platform} from 'react-native';
import styled from 'styled-components/native';
import {space, layout, border, color, flexbox, position} from 'styled-system';
import {getStatusBarHeight} from 'react-native-status-bar-height';

export const Container = styled.View`
  ${space};
  ${layout};
  ${border};
  ${color};
  ${flexbox};
  ${(props) => props.fill && `flex:1;`};
  ${(props) => props.center && `justify-content:center;align-items:center;`};
  ${(props) => props.iosHeader && `margin-top:20px`};
`;

export const TouchableContainer = styled.TouchableOpacity`
  ${space};
  ${layout};
  ${border};
  ${color};
  ${flexbox};
  ${position};
  ${(props) => props.fill && `flex:1;`};
`;

export const IOSHeaderContainer = styled.View`
  ${space};
  ${layout};
  ${border};
  ${color};
  ${flexbox};
  ${Platform.OS === 'ios' && `margin-top: ${getStatusBarHeight()}px;`};
`;

export const OverlayContainer = styled.View`
  width: 100%;
  height: 100%;
  position: absolute;
  flex: 1;
  justify-content: center;
  align-items: center;
  ${(props) => `background-color:${props.theme.colors.overlay}`};
`;
