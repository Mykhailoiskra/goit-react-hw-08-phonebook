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
    changeFilter(_, { payload }) {
      return payload;
    },
  },
  extraReducers: {
    [getContacts.fulfilled](state, action) {
      state.items = action.payload;
    },
    [addContact.fulfilled](state, action) {},
  },
});

export default contactsSlice.reducer;
