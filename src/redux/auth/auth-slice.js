import { createSlice } from '@reduxjs/toolkit';
// import { store } from '../store';
import { signup, login, logout, currentUser } from './auth-operations';

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
    [signup.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [signup.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.user = payload.user;
      store.isLogin = true;
      store.token = payload.token;
    },
    [signup.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
    [login.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [login.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.user = payload.user;
      store.isLogin = true;
      store.token = payload.token;
    },
    [login.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
    [logout.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [logout.fulfilled]: store => {
      store.loading = false;
      store.user = {};
      store.isLogin = false;
      store.token = '';
    },
    [logout.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
    [currentUser.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [currentUser.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.user = payload;
      store.isLogin = true;
    },
    [currentUser.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
      store.token = '';
    },
  },
});

export default authSlice.reducer;
