import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import pokemonsSlice from "../features/pokemons/pokemonsSlice";
import headerSlice from "../features/header/headerSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    pokemons: pokemonsSlice,
    header: headerSlice,
  },
});
