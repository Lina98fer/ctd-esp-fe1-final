import './filtros.css';
import React, { ChangeEvent, FC } from "react";
import { useDispatch } from "react-redux";
import { fetchCharactersThunk,
getCharacters } from "../../acciones/personajeAccion";

const Filtros: FC = () => {
  
  const dispatch = useDispatch();

  const onChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    dispatch(fetchCharactersThunk(query));
  };

  return (
    <div className="App-table">
      <div>
        <label htmlFor='filtro'>Filtrar por nombre:</label>
        <input
          type="text"
          onChange={onChange}
          placeholder="Rick, Morty, etc"
          value={query}
          autoFocus={true}
          name="filtro"
        />
      </div>
    </div>
  );
};

export default Filtros;