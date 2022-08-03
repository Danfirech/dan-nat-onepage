import React from 'react';
import styled from 'styled-components';
import Logo from '../images/logo.png';
import { Link } from 'react-router-dom';

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
    height: 250px;
    width: 250px;
    cursor: pointer;
  }
`;

const Right = styled.div`
  height: 100%;
  width: 20%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
  font-size: 18px;

  .about-btn {
    color: black;
    :hover {
      font-weight: bold;
    }
  }
  .contact-btn {
    color: black;
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
          <Link to="/" style={{ textDecoration: 'none' }}>
            <img src={Logo} alt="logo" className="logo-img" />
          </Link>
        </Left>
        <Right>
          <Link to="/about" style={{ textDecoration: 'none' }}>
            <div className="about-btn">About</div>
          </Link>
          <Link to="/contact" style={{ textDecoration: 'none' }}>
            <div className="contact-btn">Contact</div>
          </Link>
        </Right>
      </Container>
    </div>
  );
};

export default Header;
