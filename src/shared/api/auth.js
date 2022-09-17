import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const singup = async data => {
  const { data: result } = await instance.post('/users/signup', data);
  return result;
};
