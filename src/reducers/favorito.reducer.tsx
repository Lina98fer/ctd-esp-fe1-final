import { Reducer } from "@reduxjs/toolkit";
import { FavoritoAccion } from "../acciones/favorito.Accion";
import Personaje from "../types/personaje.types";


interface EstadoFavoritos {
    favoritos: Personaje[];
  }
  
  const estadoInicial: EstadoFavoritos = {
    favoritos: [],
  };
  
  const favoritosReducer: Reducer<EstadoFavoritos, FavoritoAccion> = (
    state = estadoInicial,
    action
  ): EstadoFavoritos => {
    switch (action.type) {
      case "ADD_FAVORITE":
        return {
          ...state,
          favoritos: [...state.favoritos, action.favorito],
        };
      case "REMOVE_FAVORITE":
        const favoritos = state.favoritos.filter(
          (item) => item.id !== action.favorito.id
        );
        return {
          ...state,
          favoritos,
        };
      case "REMOVE_ALL_FAVORITE":
        return {
          ...state,
          favoritos: [],
        };
      default:
        return { ...state };
    }
  };
  
  export default favoritosReducer;