import { Reducer } from "@reduxjs/toolkit";
import { PersonajeAccion } from "../acciones/personajeAccion";
import paginaInformacion from "../types/paginaInformacion.types";
import Personaje from "../types/personaje.types";

export interface PersonajesState {
  estado: "IDLE" | "LOADING" | "COMPLETED" | "FAILED";
  personajes: Personaje[];
  query: string;
  pageInfo: paginaInformacion;
  errorMessage: string | null;
}

const estadoInicial: PersonajesState = {
  estado: "IDLE",
  personajes: [],
  query: "",
  pageInfo: { count: 0, pages: 0, next: "", prev: "" },
  errorMessage: null
};

const personajesReducer: Reducer<PersonajesState, PersonajeAccion> = (
  state = estadoInicial,
  action
): PersonajesState => {
  switch (action.type) {
    case "GET_CHARACTERS":
      return {
        ...state,
        estado: "LOADING",
        personajes: [],
        query: action.query,
        errorMessage: null
      };
    case "GET_CHARACTERS_SUCCESS":
      return {
        ...state,
        estado: "COMPLETED",
        personajes: action.personajes,
        pageInfo: action.paginaInformacion,
      };
    case "GET_CHARACTERS_FAILED":
      return {
        ...state,
        estado: "FAILED",
        errorMessage: action.error
      };
    default:
      return {...state};
  }
};
export default personajesReducer;