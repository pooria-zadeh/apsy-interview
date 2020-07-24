import React from 'react';
import {Icon} from './styledIcon';
import {TouchableContainer} from './styledContainer';

const IconButton = ({onPress = () => {}, containerProps = {}, ...props}) => {
  return (
    <TouchableContainer {...containerProps} onPress={onPress}>
      <Icon {...props} />
    </TouchableContainer>
  );
};

export default IconButton;
