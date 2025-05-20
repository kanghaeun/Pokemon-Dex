import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const goToDex = () => {
    navigate("/dex");
  };
  return (
    <div>
      <button onClick={goToDex}>Play Now</button>
    </div>
  );
};

export default Home;
