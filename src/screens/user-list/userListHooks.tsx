import {useCallback} from 'react';
import {useUserNetwork} from '../../components/hooks/useUserNetwork';
import {fetchUserList} from '../../api/users';

export const useUserList = () => {
  const {states, dispatch} = useUserNetwork();

  const getUserList = useCallback(async () => {
    dispatch({type: 'Loading'});
    try {
      const users = await fetchUserList();
      dispatch({type: 'UserListFetched', users});
    } catch (error) {
      dispatch({type: 'Error', error: 'something went Wrong!\n try agin'});
    }
  }, [dispatch]);

  return {
    getUserList,
    states,
  };
};
