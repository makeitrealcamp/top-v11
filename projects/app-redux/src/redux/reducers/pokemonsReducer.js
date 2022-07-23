import {
  SET_POKEMONS,
  SET_POKEMONS_BEGIN,
  SET_POKEMONS_FAILED,
} from "../constant/pokemons";

const initiatValue = { pokemons: [], pages: 0 };

function reducer(state = initiatValue, action) {
  console.log("POKEMONSReducer", state, action);
  const { type, payload } = action || {};

  switch (type) {
    case SET_POKEMONS:
      return {
        ...state,
        ...payload,
        loading: false,
        error: false,
      };
    case SET_POKEMONS_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case SET_POKEMONS_FAILED:
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      return state;
  }
}

export default reducer;
