import React, {useEffect} from 'react';

import {Container} from '../../components/shared/styledContainer';
import colors from '../../styles/colors';
import DetailUser from '../../components/user-detail/DetailUser';
import {Navigation} from 'react-native-navigation';
import NetworkError from '../../components/shared/network/NetworkError';
import Loading from '../../components/shared/network/Loading';
import {useUserDetail} from './userDetailHooks';

interface IProps {
  id: number;
  componentId: string;
  options: any;
}

const UserDetailScreen: React.FC<IProps> = ({id, componentId}) => {
  const {getUserDetail, states} = useUserDetail();

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

  useEffect(() => {
    getUserDetail(id);
  }, [id, getUserDetail]);

  return (
    <Container fill>
      {states.user && <DetailUser {...states.user} />}
      {states.loading && <Loading />}
      {states.error !== '' && (
        <NetworkError retry={getUserDetail} error={states.error} />
      )}
    </Container>
  );
};

export default UserDetailScreen;
