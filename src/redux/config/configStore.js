import { configureStore } from "@reduxjs/toolkit";
import pokemon from "../slices/pokemonSlice";

const configStore = configureStore({
  reducer: {
    pokemon,
  },
});

export default configStore;
