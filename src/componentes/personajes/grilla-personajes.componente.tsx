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
import { fetchCharactersThunk } from "../../acciones/personaje.accion";

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

  const { personajes, estado } = useSelector(
    (state) => state.personajes
  );

  useEffect(() => {
    dispatch(fetchCharactersThunk(""));
  }, []);

  if (estado === "LOADING") return <div>Cargando personajes...</div>;
  if (estado === "FAILED") return <div>No se pudo cargar los personajes.</div>;
  if (!personajes || personajes.length === 0) return <></>;

  return(
    <div className="grilla-personajes">
      {personajes.map((personaje) => {
        return (
          <div key={personaje.id}>
            <TarjetaPersonaje personaje={personaje} />
          </div>
        );
      })}
    </div>
  );
}



   

 
export default GrillaPersonajes;