import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../shared/api/auth';

const signup = createAsyncThunk(
  'auth/singup',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.singup(data);
      return result;
    } catch ({ response }) {
      const { status, message } = response;
      const error = { status, message };
      return rejectWithValue(error);
    }
  }
);

export default signup;
