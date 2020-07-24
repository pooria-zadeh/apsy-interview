import React, {useRef} from 'react';
import {FlatList} from 'react-native';

import {TouchableContainer, Container} from '../shared/styledContainer';
import {Text} from '../shared/styledText';

interface User {
  id: string;
  name: string;
  email: string;
}

interface IProps {
  data: [User];
}

interface IState {}

const ListParagraphs = ({data}: IProps) => {
  const onItemPress = (item: User, index: number) => () => {
    // flatlistRef.current.scrollToIndex({
    //   animated: true,
    //   index,
    //   viewOffset: 5,
    // });
  };
  const renderItem = ({item, index}: {item: User; index: number}) => {
    return (
      <TouchableContainer
        my={2}
        px={3}
        onPress={onItemPress(item, index)}></TouchableContainer>
    );
  };

  return (
    <Container fill>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item: User, index) => item.id.toString()}
      />
    </Container>
  );
};

export default ListParagraphs;
