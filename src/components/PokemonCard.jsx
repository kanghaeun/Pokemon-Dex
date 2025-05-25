import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { CustomBtn } from "./CustomBtn";

import {
  addToMyCollection,
  deleteFromMyCollection,
} from "../redux/slices/pokemonSlice";

const PokemonCard = ({ data, btnName }) => {
  const dispatch = useDispatch();

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
            onClick={(e) => {
              e.stopPropagation();
              dispatch(addToMyCollection(data.id));
            }}
          >
            {btnName}
          </CustomBtn>
        ) : (
          <CustomBtn
            onClick={(e) => {
              e.stopPropagation();
              dispatch(deleteFromMyCollection(data.id));
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
  flex: 1 1 200px;
  max-width: 220px;
  background-color: #353443;
  border-radius: 15px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 600px) {
    max-width: 100%;
  }
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

  @media (max-width: 600px) {
    width: 100%;
    height: auto;
  }
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
