import React from "react";
import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import { pokemonData } from "../data/MOCK_DATA";

const PokemonList = () => {
  return (
    <PokemonListLayout>
      <PokemonListHeader>Today's Picks</PokemonListHeader>
      <PokemonCardItem>
        {pokemonData.map((pokemon) => {
          return <PokemonCard key={pokemon.id} data={pokemon} btnName="추가" />;
        })}
      </PokemonCardItem>
    </PokemonListLayout>
  );
};

export default PokemonList;

const PokemonListLayout = styled.div``;

const PokemonCardItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
`;

const PokemonListHeader = styled.div`
  color: white;
  font-weight: bold;
  font-size: 25px;
  margin-bottom: 15px;
  margin-left: 10px;
`;
