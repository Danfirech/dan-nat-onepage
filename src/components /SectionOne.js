import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Time from '../images/on-time.png';
import Price from '../images/price.png';
import Satisfaction from '../images/satisfaction.png';

const MainContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

const TreeSection = styled.div`
  height: 100%;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    font-size: 50px;
    color: black;
    padding-top: 150px;
    padding-left: 500px;
    text-align: center;
  }

  .contact-btn {
    font-size: 25px;
    margin-left: 500px;
    margin-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius: 10px;
    background-color: #d5d7db;
    /* border: 0.5px solid black; */
    border: none;
    cursor: pointer;
    :hover {
      background-color: #f0eff4;
    }
  }
`;

const BottomContainer = styled.div`
  height: 310px;
  width: 100vw;
  background-color: white;
  display: flex;
`;

const BottomLeft = styled.div`
  height: 100%;
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BottomMiddle = styled.div`
  height: 100%;
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BottomRight = styled.div`
  height: 100%;
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BoxContainer = styled.div`
  height: 270px;
  width: 290px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const BoxTop = styled.div`
  height: 25%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .icon {
    height: 30px;
    width: 30px;
  }
`;

const IconSquare = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 130px;
  width: 130px;
  background-color: purple;
  border-radius: 65px;
`;

const BoxMiddle = styled.div`
  height: 25%;
  width: 100%;
  font-size: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const BoxBottom = styled.div`
  height: 50%;
  width: 100%;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SectionOne = () => {
  return (
    <>
      <MainContainer>
        <TreeSection>
          <div className="title slide-in-top">
            Create and grow your website fast <br />
            with Dan and Nat Design.
          </div>
          <Link to="/contact" style={{ textDecoration: 'none' }}>
            <button className="contact-btn slide-in-top pulsate-bck">
              Contact Us
            </button>
          </Link>
        </TreeSection>
        <BottomContainer>
          <BottomLeft>
            <BoxContainer>
              <BoxTop>
                <image src={Price} alt="time" className="icon" />
              </BoxTop>
              <BoxMiddle>Fixed priced landing pages</BoxMiddle>
              <BoxBottom>
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups.
              </BoxBottom>
            </BoxContainer>
          </BottomLeft>
          <BottomMiddle>
            <BoxContainer>
              <BoxTop>
                <image src={Time} alt="time" className="icon" />
              </BoxTop>
              <BoxMiddle>Receive on time</BoxMiddle>
              <BoxBottom>
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups.
              </BoxBottom>
            </BoxContainer>
          </BottomMiddle>
          <BottomRight>
            <BoxContainer>
              <BoxTop>
                <image src={Satisfaction} alt="time" className="icon" />
              </BoxTop>
              <BoxMiddle>100% Satisfaction</BoxMiddle>
              <BoxBottom>
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups.
              </BoxBottom>
            </BoxContainer>
          </BottomRight>
        </BottomContainer>
      </MainContainer>
    </>
  );
};

export default SectionOne;
