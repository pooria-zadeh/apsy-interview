import React, {useEffect, useCallback} from 'react';
import {ActivityIndicator} from 'react-native';

import {Text} from '../components/shared/styledText';
import {fetchUser} from '../api/users';
import {useUserNetwork} from '../components/hooks/useUserNetwork';

import {
  Container,
  OverlayContainer,
} from '../components/shared/styledContainer';
import colors from '../styles/colors';
import DetailUser from '../components/user-detail/DetailUser';
import {Navigation} from 'react-native-navigation';

interface IProps {
  id: number;
  componentId: string;
  options: any;
}

const UserDetailScreen: React.FC<IProps> = ({id, componentId}) => {
  const {states, dispatch} = useUserNetwork();
  useEffect(() => {
    Navigation.mergeOptions(componentId, {
      topBar: {
        backButton: {
          color: '#fff',
        },
        title: {text: 'My Application', color: '#FFF'},
        background: {
          color: colors.primary[0],
          translucent: false,
        },
      },
    });
  }, [componentId]);
  const getUserList = useCallback(
    async (idx) => {
      dispatch({type: 'Loading'});
      try {
        const user = await fetchUser(idx);
        console.log(user);
        dispatch({type: 'UserFetched', user});
      } catch (error) {
        console.log(error);
        dispatch({type: 'Error', error: 'something went Wrong!\n try agin'});
      }
    },
    [dispatch],
  );

  useEffect(() => {
    getUserList(id);
  }, [id, getUserList]);

  return (
    <Container fill>
      {states.user && <DetailUser {...states.user} />}
      {states.loading && (
        <OverlayContainer>
          <ActivityIndicator color={colors.secondary} size={40} />
          <Text bold fontSize={20} color="secondary">
            Loading...
          </Text>
        </OverlayContainer>
      )}
    </Container>
  );
};

export default UserDetailScreen;
