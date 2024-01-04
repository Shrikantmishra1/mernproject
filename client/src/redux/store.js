import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import {persistReducer,persistStore} from "redux-persist";
import storage from 'redux-persist/lib/storage';

const rootReducer=combineReducers({user:userReducer});
const persistConfig={
      key:'root',
      version:1,
      storage,
}
// export default rootReducer;
const persistedReducer=persistReducer(
    persistConfig,rootReducer
)

export const store = configureStore({
  reducer: {
    user: persistedReducer,
  },
  middleware: (getDefaultMiddlewere) =>
    getDefaultMiddlewere({
      serializableCheck: false,
    }),
});

export const persistor=persistStore(store);