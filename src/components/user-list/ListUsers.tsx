import React from 'react';
import {FlatList} from 'react-native';

import {TouchableContainer, Container} from '../shared/styledContainer';
import {Text} from '../shared/styledText';

import {User} from '../../models/users';
import {pushUserDetail} from '../../navigations/user/userNavigation';

interface IProps {
  data: Array<User>;
  componentId: string;
}

interface IState {}

const ListUsers = ({data, componentId}: IProps) => {
  const onItemPress = (id: number) => () => {
    pushUserDetail(componentId, id);
  };
  const renderItem = ({item}: {item: User}) => {
    return (
      <TouchableContainer my={2} px={3} onPress={onItemPress(item.id)}>
        <Text bold>{item.name}</Text>
        <Text>{item.email}</Text>
      </TouchableContainer>
    );
  };

  return (
    <Container fill>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item: User) => item.id.toString()}
      />
    </Container>
  );
};

export default ListUsers;
