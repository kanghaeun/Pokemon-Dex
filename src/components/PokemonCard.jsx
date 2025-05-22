import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { CustomBtn } from "./CustomBtn";

const PokemonCard = ({
  data,
  btnName,
  addToMyCollection,
  deleteToMyCollection,
}) => {
  const navigate = useNavigate();

  const goToDetail = () => {
    navigate(`/detail?id=${data.id}`, { state: { data } });
  };

  return (
    <PokemonCardLayout onClick={goToDetail}>
      <PokemonImgWrapper>
        <PokemonImg src={data.img_url} alt={data.korean_name} />
      </PokemonImgWrapper>
      <PokemonCardHeader>
        <PokemonName>{data.korean_name}</PokemonName>
        {btnName === "추가" ? (
          <CustomBtn
            onClick={() => {
              addToMyCollection(data.id);
            }}
          >
            {btnName}
          </CustomBtn>
        ) : (
          <CustomBtn
            onClick={() => {
              deleteToMyCollection(data.id);
            }}
          >
            {btnName}
          </CustomBtn>
        )}
      </PokemonCardHeader>

      <PokemonType>
        타입 : {data.types[0]}, {data.types[1]}
      </PokemonType>
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
