import React from "react";
import styled from "styled-components";
import Header from "./Header";

const MainContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: pink;
  display: flex;
  flex-direction: column;
`;

const TreeSection = styled.div`
  height: 500px;
  width: 100vw;
  background-color: red;
`;

const BottomContainer = styled.div`
  height: 310px;
  width: 100vw;
  background-color: white;
  display: flex;
`;

const BottomLeft = styled.div`
  height: 100%;
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BottomMiddle = styled.div`
  height: 100%;
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BottomRight = styled.div`
  height: 100%;
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SectionOne = () => {
  return (
    <>
      <MainContainer>
        <Header></Header>
        <TreeSection></TreeSection>
        <BottomContainer>
          <BottomLeft>Test</BottomLeft>
          <BottomMiddle>Test</BottomMiddle>
          <BottomRight>Test</BottomRight>
        </BottomContainer>
      </MainContainer>
    </>
  );
};

export default SectionOne;
