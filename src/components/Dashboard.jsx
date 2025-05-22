import React from "react";
import styled from "styled-components";
import PokemonCard from "./PokemonCard";

const Dashboard = ({ pokemonCollection, deleteToMyCollection }) => {
  return (
    <DashboardLayout>
      <DashboardHeader>Like Auctions</DashboardHeader>
      <PokemonCardItem>
        {pokemonCollection.map((pokemon) => {
          return (
            <PokemonCard
              key={pokemon.id}
              data={pokemon}
              btnName="삭제"
              deleteToMyCollection={deleteToMyCollection}
            />
          );
        })}
      </PokemonCardItem>
    </DashboardLayout>
  );
};

export default Dashboard;

const DashboardLayout = styled.div`
  height: 300px;
  margin-bottom: 120px;
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
