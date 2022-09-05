import {configureStore} from "@reduxjs/toolkit";
import { tokenSlice } from "./Token/tokenSlice";
import { userSlice } from "./User/userSlice";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, tokenSlice.reducer, userSlice.reducer);

export const store = configureStore({
  reducer: {
    persist: persistedReducer,
  }
});

export const persistor = persistStore(store)

