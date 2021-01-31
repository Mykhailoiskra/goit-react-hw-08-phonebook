import { createSlice } from "@reduxjs/toolkit";

import { getContacts, addContact } from "redux/contacts/contactsOperations";

const initialState = {
  items: [],
  filter: "",
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    changeFilter(state, { payload }) {
      state.filter = payload;
    },
  },
  extraReducers: {
    [getContacts.fulfilled](state, action) {
      state.items = action.payload;
    },
    [addContact.fulfilled](state, action) {
      state.items.push(action.payload);
    },
  },
});
export const { changeFilter } = contactsSlice.actions;
export default contactsSlice.reducer;
