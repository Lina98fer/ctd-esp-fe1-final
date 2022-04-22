import { Reducer } from "@reduxjs/toolkit";
import { CharacterActions } from "../acciones/personajeAccion";
import Personaje from "../types/personaje.types";

export interface PersonajesState {
  status: "IDLE" | "LOADING" | "COMPLETED" | "FAILED";
  characters: Personaje[];
  errorMessage: string | null;
}

const initialState: PersonajesState = {
  status: "IDLE",
  characters: [],
  errorMessage: null
};

const personajesReducer: Reducer<PersonajesState, CharacterActions> = (
  state = initialState,
  action
): PersonajesState => {
  switch (action.type) {
    case "FETCH_CHARACTERS_PENDING":
      return {
        ...state,
        status: "LOADING",
        characters: [],
        errorMessage: null
      };
    case "FETCH_CHARACTERS_SUCCESS":
      return {
        ...state,
        status: "COMPLETED",
        characters: action.characters
      };
    case "FETCH_CHARACTERS_FAILED":
      return {
        ...state,
        status: "FAILED",
        errorMessage: action.error
      };
    default:
      return state;
  }
};
export default personajesReducer;