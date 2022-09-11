import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContacts,
  removeContacts,
} from './contacts-operation';

const initialStore = {
  items: [],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'items',
  initialState: initialStore,
  extraReducers: {
    [fetchContacts.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [fetchContacts.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.items = payload;
    },
    [fetchContacts.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
    [addContacts.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [addContacts.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.items.push(payload);
    },
    [addContacts.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
    [removeContacts.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [removeContacts.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.items = store.items.filter(({ id }) => id !== payload);
    },
    [removeContacts.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
  },
});

export default contactsSlice.reducer;

// const contactsSlice = createSlice({
//   name: 'items',
//   initialState: initialStore,
//   reducers: {
//     addContacts: {
//       reducer: (store, action) => {
//         store.push(action.payload);
//       },
//       prepare: data => {
//         return {
//           payload: {
//             ...data,
//             id: nanoid(4),
//           },
//         };
//       },
//     },
//     removeContacts: (store, action) => {
//       return store.filter(({ id }) => id !== action.payload);
//     },
//   },
// });

// export const { addContacts, removeContacts } = contactsSlice.actions;

// export default contactsSlice;
