import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import TarjetaPersonaje from "../componentes/personajes/tarjeta-personaje.componente";
import { FC } from "react";
import { connect, ConnectedProps } from "react-redux";
import { IRootState } from "../store/strore";
import { removeAllFavorite } from "../acciones/favorito.Accion";

/**
 * Esta es la pagina de favoritos. Aquí se deberan ver todos los personajes marcados como favoritos
 * 
 * Uso: 
 * ``` <PaginaFavoritos /> ```
 * 
 * @returns la pagina de favoritos
 */
 const mapState = (state: IRootState) => ({
    favoritos: state.favoritos.favoritos,
  });
  const mapDispatch = { removeAllFavorite };
  const connector = connect(mapState, mapDispatch);
  type FavoritosProps = ConnectedProps<typeof connector>;
  
  const PaginaFavoritos: FC<FavoritosProps> = ({
    favoritos,
    removeAllFavorite,
  }: FavoritosProps) => {
    return (
      <div className="container">
        <div className="actions">
          <h3>PersonajesFavoritos</h3>
          <button className="danger" onClick={removeAllFavorite}>
            Eliminar favoritos
          </button>
        </div>
        {favoritos.length === 0 ? (
          <>No hay favoritos</>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gridGap: "20px",
              justifyItems: "center",
            }}
          >
            {favoritos.map((personaje) => {
              return (
                <div key={personaje.id}>
                  <TarjetaPersonaje personaje={personaje} />
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  };
  
  export default connector(PaginaFavoritos);