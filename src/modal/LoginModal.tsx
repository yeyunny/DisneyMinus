import React from "react";
import styled from "styled-components";

const ModalDiv = styled.div`
  padding-top: 60px;
`;

const BlackDiv = styled.div`
  width: 300px;
  height: 300px;
  background-color: blue;
`;

export default function LoginModal() {
  return (
    <ModalDiv>
      <BlackDiv>Log In Out</BlackDiv>;
    </ModalDiv>
  );
}
