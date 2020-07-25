import React from 'react';
import {OverlayContainer, TouchableContainer} from '../styledContainer';
import {Text} from '../styledText';
import strings from '../../../../assets/locale/en';

interface IProps {
  retry: () => void;
  error: string;
}

const Error: React.FC<IProps> = ({retry, error}) => {
  return (
    <OverlayContainer>
      <Text bold fontSize={20} color="secondary">
        {error}
      </Text>
      <TouchableContainer
        bg="secondary"
        my={2}
        borderRadius={2}
        p={3}
        onPress={retry}>
        <Text bold fontSize={20} color="white">
          {strings.tryagain}
        </Text>
      </TouchableContainer>
    </OverlayContainer>
  );
};

export default Error;
