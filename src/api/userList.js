import axiosInstance from './index';

export const fetchUserList = () => {
  return axiosInstance()
    .get('/users')
    .then(({data}) => {
      return data.map((user) => ({
        id: user.id,
        name: user.name,
        email: user.email,
      }));
    });
};
