import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
const Home = () => {
  const navigate = useNavigate();

  const goToDex = () => {
    navigate("/dex");
  };
  return (
    <HomeLayout>
      <HomeLogo src={logo}></HomeLogo>
      <MoveBtn onClick={goToDex}>Play Now</MoveBtn>
    </HomeLayout>
  );
};

export default Home;

const HomeLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #06080e;
  height: 100vh;
  gap: 30px;
`;

const HomeLogo = styled.img`
  width: 250px;
  height: auto;
`;

const MoveBtn = styled.div`
  border: none;
  font-size: 20px;
  background-color: red;
  padding: 15px;
  border-radius: 20px;
  color: white;
  font-weight: ;
`;
