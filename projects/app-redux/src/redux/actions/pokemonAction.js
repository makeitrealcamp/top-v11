import {
  SET_POKEMONS,
  SET_POKEMONS_BEGIN,
  SET_POKEMONS_FAILED,
} from "../constant/pokemons";

//aCTION CREATOR
const setPokemons = (payload) => ({
  type: SET_POKEMONS,
  payload: { pokemons: payload },
});

const setPokemonsBegin = () => ({
  type: SET_POKEMONS_BEGIN,
});

const setPokemonsFailed = (err) => ({
  type: SET_POKEMONS_FAILED,
  payload: err,
});

// Action
export const getPokemons = () => async (dispath) => {
  try {
    dispath(setPokemonsBegin());
    const response = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data = await response.json();
    const { results } = data || {};
    dispath(setPokemons(results));
  } catch (err) {
    dispath(setPokemonsFailed(err));
  }
};
