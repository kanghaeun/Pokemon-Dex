// src/redux/slices/pokemonSlice.js

import { createSlice } from "@reduxjs/toolkit";
import MOCK_DATA from "../../data/mock";

const initialState = {
  pokemonCollection: [],
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    addToMyCollection: (state, action) => {
      const id = action.payload;

      if (state.pokemonCollection.length >= 6) {
        state.error = "더 이상 선택할 수 없습니다.";
        return;
      }

      const isDuplicate = state.pokemonCollection.some(
        (pokemon) => pokemon.id === id
      );
      if (isDuplicate) {
        state.error = "이미 선택된 포켓몬입니다.";
        return;
      }

      const newPokemon = MOCK_DATA.find((pokemon) => pokemon.id === id);
      if (newPokemon) {
        state.pokemonCollection.push(newPokemon);
        state.error = null;
      }
    },
    deleteFromMyCollection: (state, action) => {
      const id = action.payload;
      state.pokemonCollection = state.pokemonCollection.filter(
        (pokemon) => pokemon.id !== id
      );
    },
  },
});

export const { addToMyCollection, deleteFromMyCollection } =
  pokemonSlice.actions;
export default pokemonSlice.reducer;
