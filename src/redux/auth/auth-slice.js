import { createSlice } from '@reduxjs/toolkit';
// import { store } from '../store';
import singup from './auth-operations';

const initialState = {
  user: {},
  isLogin: false,
  token: '',
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [singup.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [singup.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.user = payload.user;
      store.isLogin = true;
      store.token = payload.token;
    },
    [singup.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
  },
});

export default authSlice.reducer;
