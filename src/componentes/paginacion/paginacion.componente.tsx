import './paginacion.css';
import { FC, useState} from "react";
import { useDispatch,useSelector as useRedux,TypedUseSelectorHook } from 'react-redux';
import { cambioPaginaThunk } from '../../acciones/personaje.accion';
import { IRootState } from '../../store/strore';


export const useSelector: TypedUseSelectorHook<IRootState> = useRedux;
/**
 * Componente que contiene los botones para paginar
 * 
 * Deberás agregar las propiedades necesarias para que funcione correctamente
 * 
 * 
 * @returns un JSX element 
 */
 
 const Paginacion: FC = () => {
    const dispatch = useDispatch();
  
    const paginaInformacion = useSelector((estado) => estado.personajes.pageInfo);
    const { count, next, pages, prev } = paginaInformacion;
    const [currentPage, setPage] = useState(1);
  
    const previusPage = () => {
      if (currentPage > 1) {
        setPage(currentPage - 1);
        dispatch(cambioPaginaThunk(prev));
      }
    };
  
    const nextPage = () => {
      if (currentPage < pages) {
        setPage(currentPage + 1);
        dispatch(cambioPaginaThunk(next));
      }
    };
  
    return (
      <div className="paginacion">
        <button
          onClick={previusPage}
          disabled={currentPage === 1 ? true : false}
          className={"primary"}
        >
          Anterior
        </button>
        <button
          onClick={nextPage}
          disabled={currentPage === pages ? true : false}
          className={"primary"}
        >
          Siguiente
        </button>
      </div>
    );
  };

export default Paginacion;