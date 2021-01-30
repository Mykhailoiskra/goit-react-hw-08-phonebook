import {
  configureStore,
  combineReducers,
  // getDefaultMiddleware,
} from "@reduxjs/toolkit";
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";
import itemsReducer from "./contacts/itemsSlice";
import filterReducer from "./contacts/filterSlice";
import authReducer from "./auth/authSlice";

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    auth: authReducer,
  },
  // middleware: getDefaultMiddleware({
  //   serializableCheck: {
  //     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //   },
  // }),
  devTools: process.env.NODE_ENV === "development",
});

// const persistor = persistStore(store);

// const persistedStore = { store, persistor };
export default store;
