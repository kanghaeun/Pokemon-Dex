import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";

const PokemonList = () => {
  const { MOCK_DATA } = useContext(PokemonContext);

  return (
    <PokemonListLayout>
      <PokemonListHeader>Today's Picks</PokemonListHeader>
      <PokemonCardItem>
        {MOCK_DATA.map((pokemon) => {
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
