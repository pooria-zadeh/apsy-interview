import React from 'react';
import {ActivityIndicator} from 'react-native';
import {OverlayContainer} from '../styledContainer';
import {Text} from '../styledText';
import strings from '../../../../assets/locale/en';
import colors from '../../../styles/colors';

const Loading = () => {
  return (
    <OverlayContainer>
      <ActivityIndicator color={colors.secondary} size={40} />
      <Text bold fontSize={20} color="secondary">
        {strings.loading}
      </Text>
    </OverlayContainer>
  );
};

export default Loading;
