import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        return { ...state, items: [...state.items, action.payload] };
      },
      prepare({ name, number }) {
        return {
          payload: {
            id: nanoid(),
            name: name.trim(),
            number: number.trim(),
          },
        };
      },
    },
    deleteContact(state, action) {
      return {
        ...state,
        items: state.items.filter(contact => contact.id !== action.payload),
      };
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
