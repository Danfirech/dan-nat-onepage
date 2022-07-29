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

const BoxContainer = styled.div`
  height: 270px;
  width: 290px;
  background-color: purple;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const BoxTop = styled.div`
  height: 25%;
  width: 100%;
`;

const BoxMiddle = styled.div`
  height: 25%;
  width: 100%;
`;

const BoxBottom = styled.div`
  height: 50%;
  width: 100%;
`;

const SectionOne = () => {
  return (
    <>
      <MainContainer>
        <Header></Header>
        <TreeSection></TreeSection>
        <BottomContainer>
          <BottomLeft>
            <BoxContainer>
              <BoxTop>Test</BoxTop>
              <BoxMiddle>Test</BoxMiddle>
              <BoxBottom>Test</BoxBottom>
            </BoxContainer>
          </BottomLeft>
          <BottomMiddle>
            <BoxContainer>
              <BoxTop>Test</BoxTop>
              <BoxMiddle>Test</BoxMiddle>
              <BoxBottom>Test</BoxBottom>
            </BoxContainer>
          </BottomMiddle>
          <BottomRight>
            <BoxContainer>
              <BoxTop>Test</BoxTop>
              <BoxMiddle>Test</BoxMiddle>
              <BoxBottom>Test</BoxBottom>
            </BoxContainer>
          </BottomRight>
        </BottomContainer>
      </MainContainer>
    </>
  );
};

export default SectionOne;
