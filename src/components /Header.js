import React from 'react';
import styled from 'styled-components';
import Logo from '../images/logo.png';

const Container = styled.div`
  height: 140px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  height: 100%;
  width: 35%;
  display: flex;
  justify-content: center;
  align-items: center;

  .logo-img {
    height: 200px;
    width: 200px;
    cursor: pointer;
  }
`;

const Right = styled.div`
  height: 100%;
  width: 40%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
  font-size: 18px;

  .about-btn {
    :hover {
      font-weight: bold;
    }
  }
  .contact-btn {
    padding-right: 30%;
    :hover {
      font-weight: bold;
    }
  }
`;

const Header = () => {
  return (
    <div>
      <Container>
        <Left>
          <img src={Logo} alt="logo" className="logo-img" />
        </Left>
        <Right>
          <div className="about-btn">About</div>
          <div className="contact-btn">Contact</div>
        </Right>
      </Container>
    </div>
  );
};

export default Header;
