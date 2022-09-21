// import axios from 'axios';
import instance from './auth';

export const getContactsApi = async () => {
  const { data } = await instance.get('/contacts');
  return data;
};

export const addContactsApi = async data => {
  const { data: result } = await instance.post('/contacts', data);
  return result;
};

export const removeContactsApi = async id => {
  const { data: result } = await instance.delete(`/contacts/${id}`);
  return result;
};
