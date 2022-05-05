import { Action, ActionCreator, ThunkAction } from "@reduxjs/toolkit";
import { buscarPersonajesAPI, cambioPagina } from "../service/personaje.service";
import { IRootState } from "../store/strore";
import Personaje from "../types/personaje.types";
import paginaInformacion from "../types/paginaInformacion.types"

interface getCharactersAction extends Action {
  type: "GET_CHARACTERS";
  query: string;
}

interface getCharactersSuccessAction extends Action {
  type: "GET_CHARACTERS_SUCCESS";
  characters: Personaje[];
  pageInfo: paginaInformacion;
}

interface getCharactersFailedAction extends Action {
  type: "GET_CHARACTERS_FAILED";
  error: string;
}

export const getPersonaje: ActionCreator<getCharactersAction> = (
  query: string
) => {
  return {
    type: "GET_CHARACTERS",
    query: query,
  };
};

export const getPersonajeSuccess: ActionCreator<getCharactersSuccessAction> = (
  characters: Personaje[],
  pageInfo: paginaInformacion
) => {
  return {
    type: "GET_CHARACTERS_SUCCESS",
    characters: characters,
    pageInfo: pageInfo,

  };
};

export const getPersonajeFailure: ActionCreator<getCharactersFailedAction> = (
  error: string
) => {
  return {
    type: "GET_CHARACTERS_FAILED",
    error: error
  };
};

export type PersonajeAccion =
  | ReturnType<typeof getPersonaje>
  | ReturnType<typeof getPersonajeSuccess>
  | ReturnType<typeof getPersonajeFailure>;

interface FetchCharactersThunkAction
  extends ThunkAction<void, IRootState, unknown, PersonajeAccion> {}
  

export const fetchCharactersThunk = (
  query: string
): FetchCharactersThunkAction => {
  return async (dispatch) => {
    
    dispatch(getPersonaje(query));
    try {
      const personajes: Personaje[] = await buscarPersonajesAPI(query);
      dispatch(getPersonajeSuccess(personajes));
    } catch (e) {
      dispatch(getPersonajeFailure(e));
    }
  };
};
  export const cambioPaginaThunk = (api: string): FetchCharactersThunkAction => {
    return async (dispatch) => {
      try {
        const [characters, info] = await cambioPagina(api);
        dispatch(getPersonajeSuccess(characters, info));
      } catch (e) {
        dispatch(getPersonajeFailure(e));
      }
    };
  };