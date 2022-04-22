import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';
import React, { FC, useEffect, useState } from "react";
import Personaje from "../../types/personaje.types";
import { buscarPersonajesAPI } from "../../service/personaje.service";
import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector as useReduxSelector
} from "react-redux";
import { IRootState } from "../../store/strore";
import { fetchCharactersThunk } from "../../acciones/personajeAccion";

/**
 * Grilla de personajes para la pagina de inicio
 * 
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 * 
 * 
 * @returns un JSX element 
 */

 export const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector;

 const GrillaPersonajes: FC = () => {
  const dispatch = useDispatch();

  const { characters: personajes, status } = useSelector(
    (state) => state.personajes
  );

  useEffect(() => {
    dispatch(fetchCharactersThunk(""));
  }, []);

  if (status === "LOADING") return <div>Cargando personajes...</div>;
  if (status === "FAILED") return <div>No se pudo cargar los personajes.</div>;
  if (!personajes || personajes.length === 0) return <></>;

  return <div className="grilla-personajes">
  <TarjetaPersonaje />
  <TarjetaPersonaje />
  <TarjetaPersonaje />
</div>
}



   

 
export default GrillaPersonajes;