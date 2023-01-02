import { combineReducers, configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import counter from "./counter";

const rootReducer = combineReducers({ counter });

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type AppDispatch = typeof store.dispatch;

export default store;
