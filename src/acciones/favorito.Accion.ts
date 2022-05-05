import { Action, ActionCreator } from "@reduxjs/toolkit";
import Personaje from "../types/personaje.types";

interface FavoriteAction extends Action {
    type: "ADD_FAVORITE" | "REMOVE_FAVORITE";
    favorito: Personaje;
  }
  
  interface FavoriteRemoveAllAction extends Action {
    type: "REMOVE_ALL_FAVORITE";
  }
  
  export const agregarFavorito: ActionCreator<FavoriteAction> = (
    favorito: Personaje
  ) => ({
    type: "ADD_FAVORITE",
    favorito,
  });
  
  export const removerFavorito: ActionCreator<FavoriteAction> = (
    favorito: Personaje
  ) => ({
    type: "REMOVE_FAVORITE",
    favorito,
  });
  
  export const removeAllFavorite: ActionCreator<
    FavoriteRemoveAllAction
  > = () => ({
    type: "REMOVE_ALL_FAVORITE",
  });
  
  export type FavoritoAccion =
    | ReturnType<typeof agregarFavorito>
    | ReturnType<typeof removerFavorito>
    | ReturnType<typeof removeAllFavorite>;