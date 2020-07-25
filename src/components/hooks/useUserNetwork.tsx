import {useReducer} from 'react';

import {User, UserDetail} from '../../models/users';

interface IUserReducer {
  loading: boolean;
  users: Array<User>;
  user: UserDetail;
  error: string;
}
type Loading = {
  readonly type: 'Loading';
};

type UserListFetched = {
  readonly type: 'UserListFetched';
  users: Array<User>;
};

type UserFetched = {
  readonly type: 'UserFetched';
  user: UserDetail;
};

type Error = {
  readonly type: 'Error';
  error: string;
};

type Actions = Loading | UserFetched | UserListFetched | Error;

const initialState = {
  loading: false,
  users: [],
  user: null as any,
  error: null,
};

const userReducer = (state: IUserReducer, action: Actions): IUserReducer => {
  switch (action.type) {
    case 'Loading':
      return {
        ...state,
        loading: true,
        error: '',
      };
    case 'UserFetched':
      return {
        ...state,
        user: action.user,
        loading: false,
        error: '',
      };
    case 'UserListFetched':
      return {
        ...state,
        users: action.users,
        loading: false,
        error: '',
      };
    case 'Error':
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
};

export const useUserNetwork = () => {
  const [states, dispatch] = useReducer(userReducer, initialState);

  return {
    states,
    dispatch,
  };
};
