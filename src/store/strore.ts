import { applyMiddleware, combineReducers,compose,
  createStore, } from "@reduxjs/toolkit";
import personajesReducer from "../reducers/personajes.reducer";
import {
  TypedUseSelectorHook,
  useSelector as useReduxSelector
} from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import favoritosReducer from "../reducers/favorito.reducer";

const rootReducer = combineReducers({
  personajes: personajesReducer,
  favoritos:favoritosReducer,
});

export type IRootState = ReturnType<typeof rootReducer>;
export const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector;

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);