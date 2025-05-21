import React from "react";
import styled from "styled-components";

export const CustomBtn = (props) => {
  return <CustonBtn>{props.children}</CustonBtn>;
};

const CustonBtn = styled.button`
  background-color: #4c41da;
  border-radius: 10px;
  border: none;
  color: white;
  width: 45px;
  height: 25px;
`;
