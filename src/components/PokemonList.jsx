import React from "react";
import styled from "styled-components";
import PokemonCard from "./PokemonCard";

const PokemonList = ({ data, addToMyCollection }) => {
  return (
    <PokemonListLayout>
      <PokemonListHeader>Today's Picks</PokemonListHeader>
      <PokemonCardItem>
        {data.map((pokemon) => {
          return (
            <PokemonCard
              key={pokemon.id}
              data={pokemon}
              btnName="추가"
              addToMyCollection={addToMyCollection}
            />
          );
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
  gap: 20px;
  justify-content: center;
`;

const PokemonListHeader = styled.div`
  color: white;
  font-weight: bold;
  font-size: 25px;
  margin-bottom: 15px;
  margin-left: 10px;
`;
