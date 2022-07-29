import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: white;
  display: flex;
`;

const LeftOne = styled.div`
  height: 100%;
  width: 25%;
  display: flex;
  flex-direction: column;
  background-color: white;
`;

const LeftTwo = styled.div`
  height: 100%;
  width: 25%;
  display: flex;
  flex-direction: column;
  background-color: black;
`;

const RightOne = styled.div`
  height: 100%;
  width: 25%;
  display: flex;
  flex-direction: column;
  background-color: white;
`;

const RightTwo = styled.div`
  height: 100%;
  width: 25%;
  display: flex;
  flex-direction: column;
  background-color: black;
`;

const SectionTwo = () => {
  return (
    <>
      <MainContainer>
        <LeftOne></LeftOne>
        <LeftTwo></LeftTwo>
        <RightOne></RightOne>
        <RightTwo></RightTwo>
      </MainContainer>
    </>
  );
};

export default SectionTwo;
