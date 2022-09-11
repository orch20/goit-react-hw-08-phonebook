import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getContactsApi,
  addContactsApi,
  removeContactsApi,
} from '../../shared/api/contactsApi';

export const fetchContacts = createAsyncThunk(
  'contacts/fetch',
  async (_, thunkAPI) => {
    try {
      const data = await getContactsApi();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);

export const addContacts = createAsyncThunk(
  'contacts/add',
  async (data, { rejectWithValue }) => {
    try {
      const result = await addContactsApi(data);
      return result;
    } catch (error) {
      return rejectWithValue();
    }
  }
);

export const removeContacts = createAsyncThunk(
  'contacts/remove',
  async (id, { rejectWithValue }) => {
    try {
      await removeContactsApi(id);
      return id;
    } catch (error) {
      return rejectWithValue();
    }
  }
);
