import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const ContactSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [] },
  reducers: {
    addContact(state, action) {
      state.contacts.push(action.payload);
    },
    deleteContact(state, action) {
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload
      );
      state.contacts.splice(index, 1);
    },
  },
});

const persistConfig = {
  key: 'contact',
  storage,
};

export const { addContact, deleteContact } = ContactSlice.actions;

export const contactsReducer = persistReducer(
  persistConfig,
  ContactSlice.reducer
);

export const getContacts = state => state.contacts.contacts;
