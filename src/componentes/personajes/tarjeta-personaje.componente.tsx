import BotonFavorito from '../botones/boton-favorito.componente';
import './tarjeta-personaje.css';
import  { FC, useEffect, useState } from "react";
import Personaje from '../../types/personaje.types';
import { useNavigate } from "react-router-dom";

  

/**
 * Tarjeta para cada personaje dentro de la grilla de personajes. 
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 * 
 * 
 * @returns un JSX element 
 */

const TarjetaPersonaje : FC <{ personaje: Personaje }> = ({ personaje }) => {
    const [favoritos, setFavoritos] = useState<Personaje[]>([]);
    const [esFavorito, setEsFavorito] = useState<boolean>(false);
    let navigate = useNavigate();
  
    useEffect(() => {
      favoritos.find((fav) => fav.id === personaje.id)
        ? setEsFavorito(true)
        : setEsFavorito(false);
    }, [favoritos, esFavorito, personaje.id]);
  
    
    const handleDetail = () => {
      navigate(`/detail/${personaje.name}`, { state: { personaje: personaje } });
    };
  
  
    return <div className="tarjeta-personaje">
        <img src={personaje.image}  onClick={handleDetail} alt={personaje.name}/>
        <div className="tarjeta-personaje-body">
            <span>{personaje.name}</span>
            <BotonFavorito 
            esFavorito={esFavorito} 
            setFavoritos={setFavoritos}/>
        </div>
    </div>
}

export default TarjetaPersonaje;