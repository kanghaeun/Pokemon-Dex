import React from "react";
import styled from "styled-components";
import PokemonCard from "./PokemonCard";

const Dashboard = ({ pokemonCollection }) => {
  return (
    <DashboardLayout>
      <DashboardHeader>Like Auctions</DashboardHeader>
      <PokemonCardItem>
        {pokemonCollection.map((pokemon) => {
          return <PokemonCard key={pokemon.id} data={pokemon} btnName="삭제" />;
        })}
      </PokemonCardItem>
    </DashboardLayout>
  );
};

export default Dashboard;

const DashboardLayout = styled.div`
  border: 1px solid;
  height: 300px;
`;
const DashboardHeader = styled.div`
  color: white;
  font-weight: bold;
  font-size: 25px;
  margin-bottom: 15px;
  margin-left: 10px;
`;
const PokemonCardItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
`;
