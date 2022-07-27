import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getPokemonsAsync,
  selectPokemons,
  selectLoading,
  selectError,
  setTitle,
  selectTitle,
} from "./pokemonsSlice";

const Pokemons = () => {
  const dispatch = useDispatch();
  const pokemonsData = useSelector(selectPokemons);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const title = useSelector(selectTitle);

  useEffect(() => {
    dispatch(getPokemonsAsync());
    dispatch(setTitle());
  }, []);

  console.log("pokemonsData", pokemonsData);
  if (loading) {
    return <h1>Loading....</h1>;
  }

  if (error) {
    return <h1>Erro....</h1>;
  }

  return (
    <div>
      <h1>{title}</h1>
      {pokemonsData &&
        pokemonsData.map(({ name, url }, i) => (
          <div>
            <a key={i} href={url} target="_blank" rel="noopener noreferrer">
              {name}
            </a>
          </div>
        ))}
    </div>
  );
};

export default Pokemons;
