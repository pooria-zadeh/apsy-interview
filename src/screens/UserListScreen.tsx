import React, {useEffect, useCallback} from 'react';
import {ActivityIndicator} from 'react-native';

import {fetchUserList} from '../api/users';
import ListUsers from '../components/user-list/ListUsers';
import {
  Container,
  OverlayContainer,
  TouchableContainer,
} from '../components/shared/styledContainer';

import {Text} from '../components/shared/styledText';

import colors from '../styles/colors';
import {useUserNetwork} from '../components/hooks/useUserNetwork';
import {Navigation} from 'react-native-navigation';

interface IProps {
  componentId: string;
}

const UserListScreen: React.FC<IProps> = ({componentId}) => {
  useEffect(() => {
    Navigation.mergeOptions(componentId, {
      topBar: {
        title: {text: 'MyApplication', color: '#FFF'},
        background: {
          color: colors.primary[0],
          translucent: false,
        },
      },
    });
  }, [componentId]);
  const {states, dispatch} = useUserNetwork();

  const getUserList = useCallback(async () => {
    dispatch({type: 'Loading'});
    try {
      const users = await fetchUserList();
      dispatch({type: 'UserListFetched', users});
    } catch (error) {
      dispatch({type: 'Error', error: 'something went Wrong!\n try agin'});
    }
  }, []);

  useEffect(() => {
    getUserList();
  }, [getUserList]);

  return (
    <Container fill>
      <ListUsers data={states.users} componentId={componentId} />
      {states.loading && (
        <OverlayContainer>
          <ActivityIndicator color={colors.secondary} size={40} />
          <Text bold fontSize={20} color="secondary">
            Loading...
          </Text>
        </OverlayContainer>
      )}
      {states.error && (
        <OverlayContainer>
          <Text bold fontSize={20} color="secondary">
            {states.error}
          </Text>
          <TouchableContainer
            bg="secondary"
            my={2}
            borderRadius={1}
            onPress={getUserList}>
            <Text bold fontSize={20} color="white">
              Try Again
            </Text>
          </TouchableContainer>
        </OverlayContainer>
      )}
    </Container>
  );
};

export default UserListScreen;
