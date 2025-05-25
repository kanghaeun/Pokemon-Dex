import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { CustomBtn } from "../components/CustomBtn";
import { addToMyCollection } from "../redux/slices/pokemonSlice";

const Detail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state?.data;
  const query = new URLSearchParams(location.search);
  const id = query.get("id");

  const dispatch = useDispatch();

  return (
    <DetailLayout>
      <PokemonImg src={data.img_url} alt={data.korean_name} />
      <PokemonName>{data.korean_name}</PokemonName>
      <PokemonType>
        타입 : {data.types[0]}, {data.types[1]}
      </PokemonType>
      <PokemonDescription>{data.description}</PokemonDescription>
      <CustomBtn
        onClick={() => {
          navigate(-1);
        }}
      >
        뒤로 가기
      </CustomBtn>
      <CustomBtn
        onClick={() => {
          dispatch(addToMyCollection(data.id));
        }}
      >
        추가
      </CustomBtn>
    </DetailLayout>
  );
};
export default Detail;

const DetailLayout = styled.div`
  background-color: #141420;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
`;

const PokemonImg = styled.img`
  width: 200px;
  height: 200px;
`;

const PokemonName = styled.div`
  color: white;
  font-weight: bold;
`;

const PokemonType = styled.div`
  color: white;
`;

const PokemonDescription = styled.div`
  color: white;
`;
