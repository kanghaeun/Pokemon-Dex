import React, { useState } from "react";
import styled from "styled-components";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import MOCK_DATA from "../data/mock";
import toast, { Toaster } from "react-hot-toast";

const Dex = () => {
  const notify = (message) => toast.error(message);

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
  };

  const deleteToMyCollection = (id) => {
    const newCollection = pokemonCollection.filter(
      (pokemon) => id !== pokemon.id
    );
    setPokemonCollection([...newCollection]);
  };

  return (
    <DexLayput>
      <Toaster position="top-center" reverseOrder={false} />

      <Dashboard
        pokemonCollection={pokemonCollection}
        deleteToMyCollection={deleteToMyCollection}
      />
      <PokemonList data={MOCK_DATA} addToMyCollection={addToMyCollection} />
    </DexLayput>
  );
};

export default Dex;

const DexLayput = styled.div`
  background-color: #141420;
  padding: 42px;
`;
