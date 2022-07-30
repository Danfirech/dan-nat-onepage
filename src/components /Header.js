import React from "react";
import styled from "styled-components";

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
`;

const Right = styled.div`
  height: 100%;
  width: 40%;
  background-color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const header = () => {
  return (
    <div>
      <Container>
        <Left>
          <div>LOGO</div>
        </Left>
        <Right>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
          <div>Thing</div>
        </Right>
      </Container>
    </div>
  );
};

export default header;
