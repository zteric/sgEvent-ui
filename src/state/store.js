import { configureStore, combineReducers } from "@reduxjs/toolkit";

import authReducer, { sliceName } from "./auth";
import { authApi, authReducerName } from "../services/auth.service";

const rootReducer = combineReducers({
  [sliceName]: authReducer,
  [authReducerName]: authApi.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    authApi.middleware,
  ],
});

export default store;
