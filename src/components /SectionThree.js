import React from "react";
import styled from "styled-components";
import Logo from "../images/logo.png";
import { Link } from "react-router-dom";

const MainContainer = styled.div`
  height: 40vh;
  width: 100vw;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Top = styled.div`
  height: 70%;
  width: 70vw;
  display: flex;
  align-items: center;
  background-color: white;
`;

const TopLeft = styled.div`
  height: 100%;
  width: 33.3%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TopMiddle = styled.div`
  height: 100%;
  width: 33.3%;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const TopRight = styled.div`
  height: 100%;
  width: 33.3%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Bottom = styled.div`
  height: 30%;
  width: 70vw;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: solid black 2px;

  .privecypolicy-btn {
    color: black;
    :hover {
      font-weight: bold;
    }
  }
`;

const SectionThree = () => {
  return (
    <>
      <MainContainer>
        <Top>
          <TopLeft>
            <img src={Logo} alt="logo" className="logo-img" />
          </TopLeft>
          <TopMiddle>
            <a href="https://www.w3schools.com">Dans</a>
            <a href="https://www.w3schools.com">Nats GitHUB</a>
            <a href="https://www.w3schools.com">Fiver Link</a>
          </TopMiddle>
          <TopRight>
            <div>Email Us:</div>
            <div>DanandNat@danandnatdesign.com</div>
          </TopRight>
        </Top>
        <Bottom>
          <div>2022 Dan&Nat Design</div>
          <Link to="/privecypolicy" style={{ textDecoration: "none" }}>
            <div className="privecypolicy-btn">Privecy Policy</div>
          </Link>
          <Link to="/termsAndConditions" style={{ textDecoration: "none" }}>
            <div className="privecypolicy-btn">Terms and Conditions</div>
          </Link>
        </Bottom>
      </MainContainer>
    </>
  );
};

export default SectionThree;
