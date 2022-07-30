import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  height: 80vh;
  width: 100vw;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// LEFT PIC BOX ONE //

const LeftOne = styled.div`
  height: 75%;
  width: 22%;
  display: flex;
  flex-direction: column;
  background-color: pink;
`;

const TopLeftOne = styled.div`
  height: 33.3%;
  width: 100%;
  background-color: blue;
`;

const MiddleLeftOne = styled.div`
  height: 33.3%;
  width: 100%;
  background-color: yellow;
`;

const BottomLeftOne = styled.div`
  height: 33.3%;
  width: 100%;
  background-color: green;
`;

// LEFT PIC BOX TWO //

const LeftTwo = styled.div`
  height: 75%;
  width: 22%;
  display: flex;
  flex-direction: column;
  background-color: black;
`;

const TopLeftTwo = styled.div`
  height: 33.3%;
  width: 100%;
  background-color: blue;
`;

const MiddleLeftTwo = styled.div`
  height: 33.3%;
  width: 100%;
  background-color: yellow;
`;

const BottomLeftTwo = styled.div`
  height: 33.3%;
  width: 100%;
  background-color: green;
`;

// RIGHt PIC BOX TWO //

const RightOne = styled.div`
  height: 75%;
  width: 22%;
  display: flex;
  flex-direction: column;
  background-color: pink;
`;

const TopRightOne = styled.div`
  height: 33.3%;
  width: 100%;
  background-color: blue;
`;

const MiddleRightOne = styled.div`
  height: 33.3%;
  width: 100%;
  background-color: yellow;
`;

const BottomRightOne = styled.div`
  height: 33.3%;
  width: 100%;
  background-color: green;
`;

// RIGHt PIC BOX TWO //

const RightTwo = styled.div`
  height: 75%;
  width: 22%;
  display: flex;
  flex-direction: column;
  background-color: black;
`;

const TopRightTwo = styled.div`
  height: 33.3%;
  width: 100%;
  background-color: blue;
`;

const MiddleRightTwo = styled.div`
  height: 33.3%;
  width: 100%;
  background-color: yellow;
`;

const BottomRightTwo = styled.div`
  height: 33.3%;
  width: 100%;
  background-color: green;
`;

const SectionTwo = () => {
  return (
    <>
      <MainContainer>
        <LeftOne>
          <TopLeftOne></TopLeftOne>
          <MiddleLeftOne></MiddleLeftOne>
          <BottomLeftOne></BottomLeftOne>
        </LeftOne>
        <LeftTwo>
          <TopLeftTwo></TopLeftTwo>
          <MiddleLeftTwo></MiddleLeftTwo>
          <BottomLeftTwo></BottomLeftTwo>
        </LeftTwo>
        <RightOne>
          <TopRightOne></TopRightOne>
          <MiddleRightOne></MiddleRightOne>
          <BottomRightOne></BottomRightOne>
        </RightOne>
        <RightTwo>
          <TopRightTwo></TopRightTwo>
          <MiddleRightTwo></MiddleRightTwo>
          <BottomRightTwo></BottomRightTwo>
        </RightTwo>
      </MainContainer>
    </>
  );
};

export default SectionTwo;
