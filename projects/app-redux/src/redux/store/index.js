import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import messageReducer from "../reducers/messageReducer";
import pokemonsReducer from "../reducers/pokemonsReducer";

const store = combineReducers({ messageReducer, pokemonsReducer });

const appStore = createStore(
  store,
  composeWithDevTools(applyMiddleware(thunk))
);

export default appStore;
