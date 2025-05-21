import React, { useState } from "react";
import styled from "styled-components";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import { pokemonData } from "../data/MOCK_DATA";

const Dex = () => {
  const [pokemonCollection, setPokemonCollection] = useState([]);

  const addToMyCollection = (id) => {
    const newCollection = pokemonData.filter((pokemon) => id === pokemon.id);
    setPokemonCollection([...pokemonCollection, ...newCollection]);
  };

  return (
    <DexLayput>
      <Dashboard pokemonCollection={pokemonCollection} />
      <PokemonList data={pokemonData} addToMyCollection={addToMyCollection} />
    </DexLayput>
  );
};

export default Dex;

const DexLayput = styled.div`
  background-color: #141420;
  padding: 42px;
`;
