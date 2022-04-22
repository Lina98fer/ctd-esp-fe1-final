import { Action, ActionCreator, ThunkAction } from "@reduxjs/toolkit";
import { buscarPersonajesAPI } from "../service/personaje.service";
import { IRootState } from "../store/strore";
import Personaje from "../types/personaje.types";

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

const getCharacters: ActionCreator<getCharactersAction> = (
  query: string
) => {
  return {
    type: "FETCH_CHARACTERS_PENDING",
    query: query
  };
};

const fetchCharactersSuccess: ActionCreator<FetchCharactersSuccessAction> = (
  characters: Personaje[]
) => {
  return {
    type: "FETCH_CHARACTERS_SUCCESS",
    characters: characters
  };
};

const fetchCharactersFailure: ActionCreator<FetchCharactersFailedAction> = (
  error: string
) => {
  return {
    type: "FETCH_CHARACTERS_FAILED",
    error: error
  };
};

export type CharacterActions =
  | ReturnType<typeof fetchCharactersPending>
  | ReturnType<typeof fetchCharactersSuccess>
  | ReturnType<typeof fetchCharactersFailure>;

interface FetchCharactersThunkAction
  extends ThunkAction<void, IRootState, unknown, CharacterActions> {}

export const fetchCharactersThunk = (
  query: string
): FetchCharactersThunkAction => {
  return async (dispatch, getState) => {
    // Marcamos el state como loading
    dispatch(fetchCharactersPending(query));
    //
    try {
      const personajes: Personaje[] = await buscarPersonajesAPI(query);
      dispatch(fetchCharactersSuccess(personajes));
    } catch (e) {
      dispatch(fetchCharactersFailure(e));
    }
  };
};