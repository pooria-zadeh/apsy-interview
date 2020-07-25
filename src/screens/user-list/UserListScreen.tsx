import React, {useEffect} from 'react';

import ListUsers from '../../components/user-list/ListUsers';
import {Container} from '../../components/shared/styledContainer';

import colors from '../../styles/colors';
import {useUserNetwork} from '../../components/hooks/useUserNetwork';
import {Navigation} from 'react-native-navigation';
import NetworkError from '../../components/shared/network/NetworkError';
import Loading from '../../components/shared/network/Loading';
// import {useDetectOrientation} from '../../components/hooks/useDetectOrientation';
import {useUserList} from './userListHooks';

interface IProps {
  componentId: string;
}

const UserListScreen: React.FC<IProps> = ({componentId}) => {
  const {getUserList, states} = useUserList();
  useEffect(() => {
    Navigation.mergeOptions(componentId, {
      topBar: {
        title: {text: 'My Application', color: '#FFF'},
        background: {
          color: colors.primary[0],
          translucent: false,
        },
      },
    });
  }, [componentId]);

  useEffect(() => {
    getUserList();
  }, [getUserList]);

  return (
    <Container fill>
      <ListUsers data={states.users} componentId={componentId} />
      {states.loading && <Loading />}
      {states.error !== '' && (
        <NetworkError retry={getUserList} error={states.error} />
      )}
    </Container>
  );
};

export default UserListScreen;
