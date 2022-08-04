import React from "react";
import styled from "styled-components";
import Header from "../components /Header";
import Dan from "../images/dan.png";
import Nat from "../images/nat.png";
import Footer from "../components /Footer";

const Container = styled.div`
  height: 150vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

// TOP TOP TOP

const Top = styled.div`
  height: 25%;
  width: 100%;
  display: flex;
`;

const TopLeft = styled.div`
  height: 100%;
  width: 77%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e9e9e4;
  font-size: 25px;
`;

const TopRight = styled.div`
  height: 100%;
  width: 23%;
  display: flex;
  justify-content: center;
  align-items: center;

  .dan {
    height: 100%;
    width: 100%;
    cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='60' height='72' viewport='0 0 100 100' style='fill:black;font-size:36px;'><text y='50%'>🤷🏼‍♂️</text></svg>")
        16 0,
      auto;
    :hover {
      height: 97%;
      width: 97%;
      box-shadow: 6px 6px;
      border-radius: 4px;
    }
  }
`;

// MIDDLE MIDDLE MIDDLE

const Middle = styled.div`
  height: 50%;
  width: 100%;
  background-color: blue;
  display: flex;
`;

const MiddleLeft = styled.div`
  height: 100%;
  width: 30%;
  padding-top: 1%;
  padding-bottom: 1%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: white;
  font-size: 30px;
  font-weight: bold;
`;

const MiddleMiddle = styled.div`
  height: 100%;
  width: 45%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

const MiddleRight = styled.div`
  height: 100%;
  width: 32.2%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #565552;
  color: white;
  font-size: 45px;
  font-weight: bold;
`;

// BOTTOM BOTTOM BOTTOM

const Bottom = styled.div`
  height: 25%;
  width: 100%;
  background-color: yellow;
  display: flex;
`;

const BottomLeft = styled.div`
  height: 100%;
  width: 23%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;

  .nat {
    height: 100%;
    width: 100%;
    cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='60' height='72' viewport='0 0 100 100' style='fill:black;font-size:36px;'><text y='50%'>✨</text></svg>")
        16 0,
      auto;
    :hover {
      height: 97%;
      width: 97%;
      box-shadow: 6px 6px;
      border-radius: 4px;
    }
  }
`;

const BottomRight = styled.div`
  height: 100%;
  width: 77.2%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d9d9d9;
  font-size: 25px;
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
  font-size: 20px;
`;

const About = () => {
  return (
    <div>
      <Header />
      <Container>
        <Top>
          <TopLeft>
            <BioText>
              <div className="margin">Dan</div>
              <br></br>
              <div>
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s,
              </div>
            </BioText>
          </TopLeft>
          <TopRight>
            <img className="dan" src={Dan} alt="sticky note" />
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
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s,
            </MainText>
          </MiddleMiddle>
          <MiddleRight></MiddleRight>
        </Middle>
        <Bottom>
          <BottomLeft>
            <img className="nat" src={Nat} alt="sticky note" />
          </BottomLeft>
          <BottomRight>
            <BioText>
              <div className="margin">Natalie</div>
              <br></br>
              <div>
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s,
              </div>
            </BioText>
          </BottomRight>
        </Bottom>
        <Footer />
      </Container>
    </div>
  );
};

export default About;
