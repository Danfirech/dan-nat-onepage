import React from "react";
import styled from "styled-components";
import Logo from "../images/logo.png";
import { Link } from "react-router-dom";
import Header from "../components /Header";

const Container = styled.div`
  height: 89vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

// TOP TOP TOP

const Top = styled.div`
  height: 33.3%;
  width: 100%;
  display: flex;
`;

const TopLeft = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: pink;
`;

const TopRight = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

// MIDDLE MIDDLE MIDDLE

const Middle = styled.div`
  height: 33.3%;
  width: 100%;
  background-color: blue;
  display: flex;
`;

const MiddleLeft = styled.div`
  height: 100%;
  width: 33.3%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: purple;
`;

const MiddleMiddle = styled.div`
  height: 100%;
  width: 33.3%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: pink;
`;

const MiddleRight = styled.div`
  height: 100%;
  width: 33.3%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: red;
`;

// BOTTOM BOTTOM BOTTOM

const Bottom = styled.div`
  height: 33.3%;
  width: 100%;
  background-color: yellow;
  display: flex;
`;

const BottomLeft = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const BottomRight = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: green;
`;

const About = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Top>
          <TopLeft>BIO HERE</TopLeft>
          <TopRight>Natalie Pic Here</TopRight>
        </Top>
        <Middle>
          <MiddleLeft>
            <div>A</div>
            <div>B</div>
            <div>O</div>
            <div>U</div>
            <div>T</div>
            <br></br>
            <div>U</div>
            <div>S</div>
          </MiddleLeft>
          <MiddleMiddle>
            <div>BIO About US</div>
          </MiddleMiddle>
          <MiddleRight>
            <div>Color</div>
          </MiddleRight>
        </Middle>
        <Bottom>
          <BottomLeft>DAN PIC</BottomLeft>
          <BottomRight>DAN BIO</BottomRight>
        </Bottom>
      </Container>
    </div>
  );
};

export default About;
