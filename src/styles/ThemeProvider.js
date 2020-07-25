import React from 'react';
import {ThemeProvider as Provider} from 'styled-components/native';
import colors from './colors';
import fonts from './fonts/SFProText';

const theme = {
  space: [0, 4, 8, 16, 24, 32, 64, 128],
  breakpoints: ['40em', '52em', '64em'],
  sizes: [12, 16, 18, 20, 24, 32],
  colors,
  fonts,
};

const ThemeProvider = ({children, ...props}) => {
  return (
    <Provider theme={theme} {...props}>
      {children}
    </Provider>
  );
};

export default ThemeProvider;
