import React from "react";
import styled from "styled-components";
import hero1 from "../images/hero-1.jpg";
import hero2 from "../images/hero-2.jpg";
import hero3 from "../images/hero-3.jpg";
import hero7 from "../images/hero-7.jpg";
import hero8 from "../images/hero-8.jpg";

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
  background-color: white;
  display: flex;

  .pic1 {
    height: 99%;
    width: 48%;
  }

  .pic2 {
    height: 99%;
    width: 50%;
    padding-left: 1%;
  }
`;

const MiddleLeftOne = styled.div`
  height: 33.3%;
  width: 100%;
  background-color: white;
  display: flex;

  .pic2 {
    height: 99%;
    width: 99%;
  }
`;

const BottomLeftOne = styled.div`
  height: 33.3%;
  width: 100%;
  background-color: white;

  .pic3 {
    height: 99%;
    width: 99%;
  }
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
          <TopLeftOne>
            <img className="pic1" src={hero1} alt="sticky note" />
            <img className="pic2" src={hero3} alt="sticky note" />
          </TopLeftOne>
          <MiddleLeftOne>
            <img className="pic2" src={hero8} alt="sticky note" />
          </MiddleLeftOne>
          <BottomLeftOne>
            <img className="pic3" src={hero7} alt="sticky note" />
          </BottomLeftOne>
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
