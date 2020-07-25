import React from 'react';
import {Container} from '../shared/styledContainer';
import {Text} from '../shared/styledText';

import strings from '../../../assets/locale/en';

const SelectAUser = () => {
  return (
    <Container center>
      <Text>{strings.selectUser}</Text>
    </Container>
  );
};

export default SelectAUser;
