import React from "react";
import styled from "styled-components";
import Header from "./Header";
import HeroPic from "../images/hero-6.jpg";

const MainContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

// const TopContainer = styled.div``;

const TreeSection = styled.div`
  height: 500px;
  width: 100vw;
  .hero-img {
    width: 100%;
    height: 460px;
    position: absolute;
    object-fit: cover;
    z-index: -1;
  }

  .title {
    font-size: 45px;
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 150px;
    padding-left: 500px;
  }
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
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BoxMiddle = styled.div`
  height: 25%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BoxBottom = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SectionOne = () => {
  return (
    <>
      <MainContainer>
        <Header></Header>
        <TreeSection>
          <img src={HeroPic} alt="main-pic" className="hero-img" />
          <div className="title">
            Create and grow your website fast <br />
            with Dan and Nat Designs.
          </div>
        </TreeSection>

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
