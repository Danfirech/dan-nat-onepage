import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import HeroPic from '../images/hero-6.jpg';

const MainContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

const TreeSection = styled.div`
  height: 500px;
  width: 100vw;
  .hero-img {
    width: 100%;
    height: 460px;
    /* width: 100%;
    height: 95%; */
    /* position: absolute; */
    object-fit: cover;
  }

  .title {
    font-size: 20px;
    color: black;
    z-index: 99;
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
        <TreeSection>
          <div className="title">
            Create and grow your website fast with Dan and Nat Designs.
          </div>
          <img src={HeroPic} alt="main-pic" className="hero-img" />
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
