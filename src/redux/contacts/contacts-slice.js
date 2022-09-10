import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from './contacts-operation';
import { nanoid } from 'nanoid';

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
