import React from "react";
import styled from "styled-components";
import Logo from "../images/logo.png";
import { Link } from "react-router-dom";
import Header from "../components /Header";
import JotformEmbed from "react-jotform-embed";

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
  background-color: white;
  margin-top: -10%;

  .font {
    font-size: 28px;
  }
`;

const Bottom = styled.div`
  height: 50vh;
  width: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const Contact = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Top>
          <div className="font">Contact Dan and Nat</div>
          <div>
            We’re here to help and answer any question you might have. We look
            forward to hearing from you 🙂
          </div>
        </Top>
        <Bottom>
          <JotformEmbed src="https://form.jotform.com/222144101705137" />
        </Bottom>
      </Container>
    </div>
  );
};

export default Contact;
