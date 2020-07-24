import React, {useRef} from 'react';

import {FlatList} from 'react-native-gesture-handler';

import {TouchableContainer, Container} from '../../shared/styledContainer';
import {Text} from '../../shared/styledText';

interface IProps {
  data: [{id: string; name: string; email: string}];
}

interface IState {}

const ListParagraphs = ({data}: IProps) => {
  const onItemPress = (item, index) => () => {
    // flatlistRef.current.scrollToIndex({
    //   animated: true,
    //   index,
    //   viewOffset: 5,
    // });
  };
  const renderItem = ({item, index}) => {
    return (
      <TouchableContainer my={2} px={3} onPress={onItemPress(item, index)}>
        <Text regular>{item.content}</Text>
      </TouchableContainer>
    );
  };

  return (
    <Container fill>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item: any, index) => item.id.toString()}
      />
    </Container>
  );
};

export default ListParagraphs;
