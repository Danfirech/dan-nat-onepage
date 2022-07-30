import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  height: 60vh;
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
  justify-content: space-between;
  background-color: white;
`;

const Bottom = styled.div`
  height: 30%;
  width: 70vw;
  background-color: grey;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SectionThree = () => {
  return (
    <>
      <MainContainer>
        <Top>
          <div>Logo</div>
          <div>Links</div>
          <div>Email Us</div>
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
