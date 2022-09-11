import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://631a5378dc236c0b1edc313d.mockapi.io/contacts',
});

export const getContactsApi = async () => {
  const { data } = await instance.get('/');
  return data;
};

export const addContactsApi = async data => {
  const { data: result } = await instance.post('/', data);
  return result;
};

export const removeContactsApi = async id => {
  const { data: result } = await instance.delete(`/${id}`);
  return result;
};
