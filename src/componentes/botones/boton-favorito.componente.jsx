import './boton-favorito.css';
import { FC, useEffect } from "react";
import { IRootState } from "../../store/store";
import Character from "../../types/character.types";
import { addFavorite, removeFavorite } from "../../actions/favorites.actions";
import { connect, ConnectedProps } from "react-redux";
/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 * 
 * Deberás tipar las propiedades si usas este componente
 * 
 * 
 * @returns un JSX element 
 */
const BotonFavorito = ({esFavorito, onClick}) => {
    const src = esFavorito ? "/imagenes/star-filled.png" : "/imagenes/star.png"

    return <div className="boton-favorito">
        <img src={src} alt={"favorito"} />
    </div>
}

export default BotonFavorito;