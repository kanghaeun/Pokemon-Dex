import React from "react";
import styled from "styled-components";

export const CustomBtn = ({ children, onClick }) => {
  return <CustonBtn onClick={onClick}>{children}</CustonBtn>;
};

const CustonBtn = styled.button`
  background-color: #4c41da;
  border-radius: 10px;
  border: none;
  color: white;
  padding: 5px 11px;
  width: auto;
  height: auto;
`;
