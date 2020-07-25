import {useCallback} from 'react';
import {useUserNetwork} from '../../components/hooks/useUserNetwork';
import {fetchUser} from '../../api/users';

export const useUserDetail = () => {
  const {states, dispatch} = useUserNetwork();
  const getUserDetail = useCallback(
    async (idx) => {
      dispatch({type: 'Loading'});
      try {
        const user = await fetchUser(idx);
        dispatch({type: 'UserFetched', user});
      } catch (error) {
        dispatch({type: 'Error', error: 'something went Wrong!\n try agin'});
      }
    },
    [dispatch],
  );

  return {
    getUserDetail,
    states,
  };
};
