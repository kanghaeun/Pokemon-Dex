import React, { useState } from "react";
import { Router } from "./router/Router.jsx";
import { PokemonContext } from "./context/PokemonContext.js";
import MOCK_DATA from "./data/mock.js";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [pokemonCollection, setPokemonCollection] = useState([]);

  const addToMyCollection = (id) => {
    setPokemonCollection((prevCollection) => {
      if (prevCollection.length >= 6) {
        notify("더 이상 선택할 수 없습니다.");
        return prevCollection;
      }

      const isDuplicate = prevCollection.some((pokemon) => pokemon.id === id);
      if (isDuplicate) {
        notify("이미 선택된 포켓몬입니다.");
        return prevCollection;
      }

      const newCollection = MOCK_DATA.filter((pokemon) => id === pokemon.id);
      return [...prevCollection, ...newCollection];
    });

    const notify = (message) => toast.error(message);
  };

  const deleteToMyCollection = (id) => {
    const newCollection = pokemonCollection.filter(
      (pokemon) => id !== pokemon.id
    );
    setPokemonCollection([...newCollection]);
  };

  return (
    <PokemonContext.Provider
      value={{
        pokemonCollection,
        addToMyCollection,
        deleteToMyCollection,
        MOCK_DATA,
      }}
    >
      <Toaster position="top-center" reverseOrder={false} />

      <Router />
    </PokemonContext.Provider>
  );
}

export default App;
