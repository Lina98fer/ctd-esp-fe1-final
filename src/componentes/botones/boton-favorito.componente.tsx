import './boton-favorito.css';
import { FC, useEffect } from "react";
import { IRootState } from '../../store/strore';
import Personaje from '../../types/personaje.types';
import { agregarFavorito,removerFavorito } from '../../acciones/favorito.Accion';
import { connect, ConnectedProps } from "react-redux";

const mapState = (estado: IRootState) => ({
    favoritos: estado.favoritos.favoritos,
  });
  
  const mapDispatch = {
    agregarFavorito,
    removerFavorito,
  };
  
  const connector = connect(mapState, mapDispatch);
  type FavoritosProps = ConnectedProps<typeof connector>;
  
  const BotonFavorito: FC<
    {
      personaje: Personaje;
      esFavorito: boolean;
      setFavoritos: React.Dispatch<React.SetStateAction<Personaje[]>>;
    } & FavoritosProps
  > = ({
    personaje,
    esFavorito,
    setFavoritos,
    favoritos,
    agregarFavorito,
    removerFavorito,
  }) => {
    const src = esFavorito ? "/imagenes/star-filled.png" : "/imagenes/star.png";
  
    const updateFavorites = (event: React.MouseEvent<HTMLElement>) => {
      event.preventDefault();
      favoritos.find((fav) => fav.id === personaje.id)
        ? removerFavorito(personaje)
        : agregarFavorito(personaje);
    };
  
    useEffect(() => {
      setFavoritos(favoritos);
    }, [favoritos]);
  
    return (
      <button className="boton-favorito" 
      onClick={updateFavorites} 
      type="button">
        <img src={src} alt={"favorito"} />
      </button>
    );
  };
  
  export default connector(BotonFavorito);