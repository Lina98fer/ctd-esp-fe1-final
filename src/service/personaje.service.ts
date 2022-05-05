import Personaje from "../types/personaje.types";
import paginaInformacion from "../types/paginaInformacion.types";
import Episodio from "../types/episodio.types";


export const buscarPersonajesAPI = async (
  nombre?: string):
   Promise<Personaje[]> => {
  let nombreParametro = "";
  if (nombre !==""&& nombre !== undefined) {
    nombreParametro = `name=${nombre}`;
  }
  return fetch(`https://rickandmortyapi.com/api/character/${nombreParametro}`)
    .then((data) => data.json())
    .then((data) => data.results);
};

export const getEpisodios = async (api: string): Promise<Episodio> => {
  const response = await fetch(api);
  return await response.json();
};

export const cambioPagina = async   (
  api: string
): Promise<[Personaje[], paginaInformacion]> => {
  return fetch(api)
    .then((data) => data.json())
    .then((data) => [data.results, data.info]);
};


