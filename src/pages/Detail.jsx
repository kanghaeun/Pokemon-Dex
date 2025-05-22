import styled from "styled-components";
import { useLocation } from "react-router-dom";

const Detail = () => {
  const location = useLocation();
  const data = location.state?.data;

  const query = new URLSearchParams(location.search);
  const id = query.get("id");

  return (
    <DetailLayout>
      <PokemonImg src={data.img_url} alt={data.korean_name} />
      <PokemonName>{data.korean_name}</PokemonName>
      <PokemonType>
        타입 : {data.types[0]}, {data.types[1]}
      </PokemonType>
      <PokemonDescription>{data.description}</PokemonDescription>
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
