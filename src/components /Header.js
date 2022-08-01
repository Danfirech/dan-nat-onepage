import React from 'react';
import styled from 'styled-components';
import Logo from '../images/logo.png';

const Container = styled.div`
  height: 140px;
  width: 100vw;
  display: flex;
  background-color: white;
  justify-content: space-between;
`;

const Left = styled.div`
  height: 100%;
  width: 35%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  .logo-img {
    height: 200px;
    width: 200px;
  }
`;

const Right = styled.div`
  height: 100%;
  width: 40%;
  background-color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Header = () => {
  return (
    <div>
      <Container>
        <Left>
          <img src={Logo} alt="logo" className="logo-img" />
        </Left>
        <Right>
          <div>About</div>
          <div>Contact</div>
        </Right>
      </Container>
    </div>
  );
};

export default Header;
