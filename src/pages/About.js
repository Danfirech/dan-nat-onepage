import React from "react";
import styled from "styled-components";
import Logo from "../images/logo.png";
import { Link } from "react-router-dom";
import Header from "../components /Header";
import Woman from "../images/woman.png";

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
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: pink;
`;

const TopRight = styled.div`
  height: 100%;
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;

  .woman {
    height: 100%;
    width: 100%;
  }
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
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: purple;
`;

const MiddleMiddle = styled.div`
  height: 100%;
  width: 45%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: pink;
`;

const MiddleRight = styled.div`
  height: 100%;
  width: 32.2%;
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
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;

  .woman {
    height: 100%;
    width: 100%;
  }
`;

const BottomRight = styled.div`
  height: 100%;
  width: 77.2%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: green;
`;

const BioText = styled.div`
  height: 100%;
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .margin {
    margin-bottom: 5px;
  }
`;

const MainText = styled.div`
  height: 100%;
  width: 52%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const About = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Top>
          <TopLeft>
            <BioText>
              <div className="margin">Natalie</div>
              <br></br>
              <div>
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s,
              </div>
            </BioText>
          </TopLeft>
          <TopRight>
            <img className="woman" src={Woman} alt="sticky note" />
          </TopRight>
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
            <MainText>
              <div>
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s,
              </div>
            </MainText>
          </MiddleMiddle>
          <MiddleRight>
            <div>Color</div>
          </MiddleRight>
        </Middle>
        <Bottom>
          <BottomLeft>
            <img className="woman" src={Woman} alt="sticky note" />
          </BottomLeft>
          <BottomRight>
            <BioText>
              <div className="margin">Dan</div>
              <br></br>
              <div>
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s,
              </div>
            </BioText>
          </BottomRight>
        </Bottom>
      </Container>
    </div>
  );
};

export default About;
