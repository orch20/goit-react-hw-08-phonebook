import { createAsyncThunk } from '@reduxjs/toolkit';
import { getContactsApi } from '../../shared/api/contactsApi';

export const fetchContacts = createAsyncThunk(
  'contactsFetch',
  async (_, thunkAPI) => {
    try {
      const data = await getContactsApi();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);

fetchContacts(console.log);
