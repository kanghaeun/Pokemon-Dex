import React from "react";
import styled from "styled-components";
import { CustomBtn } from "./CustomBtn";

const PokemonCard = ({ data, btnName }) => {
  return (
    <PokemonCardLayout>
      <PokemonImgWrapper>
        <PokemonImg src={data.image} alt={data.name} />
      </PokemonImgWrapper>
      <PokemonCardHeader>
        <PokemonName>{data.name}</PokemonName>
        <CustomBtn>{btnName}</CustomBtn>
      </PokemonCardHeader>

      <PokemonType>타입 : {data.type}</PokemonType>
    </PokemonCardLayout>
  );
};

export default PokemonCard;

const PokemonCardLayout = styled.div`
  background-color: #353443;
  width: 220px;
  height: auto;
  border-radius: 15px;
  padding: 15px;
  display: flex;
  gap: 12px;
  flex-direction: column;
  justify-content: center;
`;

const PokemonImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 15px;
`;

const PokemonCardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const PokemonImg = styled.img`
  width: 200px;
  height: 200px;
`;
const PokemonName = styled.div`
  color: white;
  font-weight: bold;
  font-size: 15px;
`;
const PokemonType = styled.div`
  color: white;
  font-size: 14px;
`;
