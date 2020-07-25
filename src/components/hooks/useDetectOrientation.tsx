import {useState} from 'react';
import {Dimensions} from 'react-native';

const isPortraitFunc = (): boolean => {
  const {width, height} = Dimensions.get('screen');
  return width <= height;
};

export const useDetectOrientation = () => {
  const [userId, setUserId] = useState(null);

  const [isPortrait, setOrientation] = useState<boolean>(isPortraitFunc());

  Dimensions.addEventListener('change', () => {
    setOrientation(isPortraitFunc());
  });
  return {
    isPortrait,
  };
};
