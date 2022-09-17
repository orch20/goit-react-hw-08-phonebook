import { configureStore, combineReducers } from '@reduxjs/toolkit';
import contactsSlice from './contacts/contacts-slice';
import filterSlice from './filter/filter-slice';
import authSlice from './auth/auth-slice';

const Reducer = combineReducers({
  auth: authSlice,
  items: contactsSlice,
  filter: filterSlice,
});

const rootReducer = combineReducers({
  contacts: Reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
