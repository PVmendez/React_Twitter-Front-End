import {configureStore} from "@reduxjs/toolkit";
import { tokenSlice } from "./Token/tokenSlice";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, tokenSlice.reducer)

export const store = configureStore({
  reducer: {
    token: persistedReducer,
  }
});

export const persistor = persistStore(store)

