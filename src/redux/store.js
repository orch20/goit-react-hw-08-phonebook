import { configureStore, combineReducers } from '@reduxjs/toolkit';
import contactsSlice from './contacts/contacts-slice';
import filterSlice from './filter/filter-slice';
import authSlice from './auth/auth-slice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  items: contactsSlice,
  filter: filterSlice,
});

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

const persistedReducer = persistReducer(persistConfig, authSlice);

export const store = configureStore({
  reducer: {
    contacts: rootReducer,
    auth: persistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
          'auth/logout/fulfilled',
        ],
      },
    }),
});

export const persistor = persistStore(store);
