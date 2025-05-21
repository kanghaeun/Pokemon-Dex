import React from "react";
import styled from "styled-components";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";

const Dex = () => {
  return (
    <DexLayput>
      <Dashboard />
      <PokemonList />
    </DexLayput>
  );
};

export default Dex;

const DexLayput = styled.div`
  background-color: #141420;
  padding: 25px;
`;
