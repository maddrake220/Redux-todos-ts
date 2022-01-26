import { Action, applyMiddleware, createStore, Dispatch } from "redux";
import { persistReducer } from "redux-persist";
import todosReducer from "./todosReducer";
import { composeWithDevTools } from "redux-devtools-extension";

import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const enhancedReducer = persistReducer(persistConfig, todosReducer);

const loggerMiddleware = () => (next: Dispatch) => (action: Action) => {
  console.log(action);
  return next(action);
};

export const store = createStore(
  enhancedReducer,
  composeWithDevTools(applyMiddleware(loggerMiddleware))
);
