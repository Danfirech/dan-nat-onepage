import React from "react";
import styled from "styled-components";
import Logo from "../images/logo.png";
import { Link } from "react-router-dom";
import Header from "../components /Header";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Top = styled.div`
  height: 20vh;
  width: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: pink;
  margin-top: -10%;
`;

const Bottom = styled.div`
  height: 40vh;
  width: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: center;
  align-items: center;
  background-color: blue;
`;

const Contact = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Top>
          <div>Contact Dan and Nat</div>
          <div>
            We’re here to help and answer any question you might have. We look
            forward to hearing from you 🙂
          </div>
        </Top>
        <Bottom></Bottom>
      </Container>
    </div>
  );
};

export default Contact;
