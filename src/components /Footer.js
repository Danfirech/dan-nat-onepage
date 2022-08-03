import React from 'react';
import styled from 'styled-components';
import Logo from '../images/logo.png';
import { Link } from 'react-router-dom';

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

  .logo-img {
    height: 300px;
    width: 300px;
  }
`;

const TopMiddle = styled.div`
  height: 100%;
  width: 33.3%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  a {
    text-decoration: none;
    color: black;
    :hover {
      font-weight: bold;
    }
  }
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
  border-top: solid black 0.5px;

  .btn {
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
            <a href="https://www.w3schools.com">Dan's GitHub</a>
            <a href="https://www.w3schools.com">Nats GitHub</a>
            <a href="https://www.w3schools.com">Fiver </a>
          </TopMiddle>
          <TopRight>
            <div>Email Us:</div>
            <div>DanandNat@danandnatdesign.com</div>
          </TopRight>
        </Top>
        <Bottom>
          <div>2022 Dan&Nat Design</div>
          <Link to="/privacypolicy" style={{ textDecoration: 'none' }}>
            <div className="btn">Privacy Policy</div>
          </Link>
          <Link to="/termsAndConditions" style={{ textDecoration: 'none' }}>
            <div className="btn">Terms and Conditions</div>
          </Link>
        </Bottom>
      </MainContainer>
    </>
  );
};

export default SectionThree;
