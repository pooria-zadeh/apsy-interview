import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {fetchUserList} from '../api/userList';

const UserListScreen = () => {
  const [users, serUsers] = useState([]);

  const getUserList = async () => {
    const users = await fetchUserList();
    serUsers(users);
  };

  useEffect(() => {
    getUserList();
  }, []);
  return <View></View>;
};

export default UserListScreen;
