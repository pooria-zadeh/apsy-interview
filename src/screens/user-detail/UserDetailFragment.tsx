import React, {useEffect} from 'react';

import {Container} from '../../components/shared/styledContainer';

import DetailUser from '../../components/user-detail/DetailUser';
import NetworkError from '../../components/shared/network/NetworkError';
import Loading from '../../components/shared/network/Loading';
import {useUserDetail} from './userDetailHooks';
import SelectAUser from '../../components/user-detail/SelectAUser';

interface IProps {
  id: number;
  options: any;
}

const UserDetailFragment: React.FC<IProps> = ({id}) => {
  const {getUserDetail, states} = useUserDetail();

  useEffect(() => {
    if (id) {
      getUserDetail(id);
    }
  }, [id, getUserDetail]);

  return (
    <Container width={'80%'}>
      {id ? states.user && <DetailUser {...states.user} /> : <SelectAUser />}
      {states.loading && <Loading />}
      {states.error !== '' && (
        <NetworkError retry={getUserDetail} error={states.error} />
      )}
    </Container>
  );
};

export default UserDetailFragment;
