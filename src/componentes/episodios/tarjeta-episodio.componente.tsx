import { FC,useState, useEffect } from 'react';
import './tarjeta-episodio.css';
import Episodio from '../../types/episodio.types';
import { getEpisodios } from '../../service/personaje.service';

/**
 * Tarjeta para cada episodio dentro de la vista de personaje.
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los episodios
 * 
 * 
 * @returns un JSX element 
 */
 const TarjetaEpisodio: FC<{ episodio: string }> = ({ episodio }) => {
    const [episodioData, setEpisodioData] = useState<Episodio>({
      id: 0,
      name: "",
      air_date: "",
      episode: "",
      characters: [],
    });

 useEffect(()=>{
     getEpisodios(episodio).then((resp) => {
        setEpisodioData(resp);
      });
 },[episodio]);
    return (
        <div className="tarjeta-episodio">
          <h4>{episodioData.name}</h4>
          <div>
            <span>{episodioData.episode}</span>
            <span>Lanzado el: {episodioData.air_date}</span>
          </div>
        </div>
      );
}

export default TarjetaEpisodio;