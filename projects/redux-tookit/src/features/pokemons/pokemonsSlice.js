import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPokemons } from "./pokemonsAPI";

const initialState = {
  page: 0,
  pokemons: [],
};

export const getPokemonsAsync = createAsyncThunk(
  "pokemons/getPokemmons",
  async () => {
    console.log("getPokemonsAsync");
    const response = await getPokemons();
    return response.data;
  }
);

export const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    setTitle: (state) => {
      state.title = "POKEMONES";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPokemonsAsync.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getPokemonsAsync.fulfilled, (state, action) => {
      state.pokemons = action.payload;
      state.loading = false;
    });
    builder.addCase(getPokemonsAsync.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
      state.errorDetail = action.error;
    });
  },
});

export const { setTitle } = pokemonsSlice.actions;

export const selectPokemons = (state) => state.pokemons.pokemons;
export const selectLoading = (state) => state.pokemons.loading;
export const selectError = (state) => state.pokemons.error;
export const selectTitle = (state) => state.pokemons.title;

export default pokemonsSlice.reducer;
