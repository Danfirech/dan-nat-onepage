import React from "react";
import styled from "styled-components";
import Logo from "../images/logo.png";

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
  justify-content: center;
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
            <div>Links</div>
          </TopMiddle>
          <TopRight>
            <div>Email Us:</div>
            <div>DanandNat@danandnatdesign.com</div>
          </TopRight>
        </Top>
        <Bottom>
          <div>2022 Dan&Nat Design</div>
          <div>Privacy Policy</div>
          <div>Terms and Conditions</div>
        </Bottom>
      </MainContainer>
    </>
  );
};

export default SectionThree;
