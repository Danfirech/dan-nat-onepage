import React from 'react';
import styled from 'styled-components';
import hero1 from '../images/hero-1.jpg';
import hero2 from '../images/hero-2.jpg';
import hero3 from '../images/hero-3.jpg';
import hero4 from '../images/hero-4.jpg';
import hero5 from '../images/hero-5.jpg';
import hero6 from '../images/hero-6.jpg';
import hero7 from '../images/hero-7.jpg';
import hero8 from '../images/hero-8.jpg';
import hero9 from '../images/hero-9.jpg';
import hero10 from '../images/hero-10.jpg';

const MainContainer = styled.div`
  height: 80vh;
  width: 100vw;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  height: 100px;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  margin-bottom: -60px;
  font-size: 45px;
`;

// LEFT PIC BOX ONE //

const LeftOne = styled.div`
  height: 75%;
  width: 22%;
  display: flex;
  flex-direction: column;
  background-color: pink;
`;

const TopLeftOne = styled.div`
  height: 33.3%;
  width: 100%;
  background-color: white;
  display: flex;

  .pic1 {
    height: 99%;
    width: 48%;
  }

  .pic2 {
    height: 99%;
    width: 50%;
    padding-left: 1%;
  }
`;

const MiddleLeftOne = styled.div`
  height: 33.3%;
  width: 100%;
  background-color: white;
  display: flex;

  .pic2 {
    height: 99%;
    width: 99%;
  }
`;

const BottomLeftOne = styled.div`
  height: 33.3%;
  width: 100%;
  background-color: white;

  .pic3 {
    height: 99%;
    width: 99%;
  }
`;

// LEFT PIC BOX TWO //

const LeftTwo = styled.div`
  height: 75%;
  width: 22%;
  display: flex;
  flex-direction: column;
  background-color: white;
`;

const TopLeftTwo = styled.div`
  height: 40%;
  width: 100%;
  background-color: white;

  .pic1 {
    height: 99%;
    width: 99%;
  }
`;

const MiddleLeftTwo = styled.div`
  height: 30%;
  width: 100%;
  background-color: white;

  .pic1 {
    height: 99%;
    width: 48%;
  }

  .pic2 {
    height: 99%;
    width: 50%;
    padding-left: 1%;
  }
`;

const BottomLeftTwo = styled.div`
  height: 30%;
  width: 100%;
  background-color: white;

  .pic1 {
    height: 99%;
    width: 48%;
  }

  .pic2 {
    height: 99%;
    width: 50%;
    padding-left: 1%;
  }
`;

// RIGHt PIC BOX TWO //

const RightOne = styled.div`
  height: 75%;
  width: 22%;
  display: flex;
  flex-direction: column;
  background-color: white;
`;

const TopRightOne = styled.div`
  height: 33.3%;
  width: 100%;
  background-color: white;

  .pic1 {
    height: 99%;
    width: 48%;
  }

  .pic2 {
    height: 99%;
    width: 50%;
    padding-left: 1%;
  }
`;

const MiddleRightOne = styled.div`
  height: 33.3%;
  width: 100%;
  background-color: white;
`;

const BottomRightOne = styled.div`
  height: 66.6%;
  width: 100%;
  background-color: white;

  .pic1 {
    height: 99%;
    width: 99%;
  }
`;

// RIGHt PIC BOX TWO //

const RightTwo = styled.div`
  height: 75%;
  width: 22%;
  display: flex;
  flex-direction: column;
  background-color: black;
`;

const TopRightTwo = styled.div`
  height: 33.3%;
  width: 100%;
  background-color: white;
  display: flex;

  .pic1 {
    height: 99%;
    width: 48%;
  }

  .pic2 {
    height: 99%;
    width: 50%;
    padding-left: 1%;
  }
`;

const MiddleRightTwo = styled.div`
  height: 33.3%;
  width: 100%;
  background-color: white;

  .pic3 {
    height: 99%;
    width: 99%;
  }
`;

const BottomRightTwo = styled.div`
  height: 33.3%;
  width: 100%;
  background-color: white;

  .pic3 {
    height: 99%;
    width: 99%;
  }
`;

const SectionTwo = () => {
  return (
    <>
      <Title>Our Daily Inspo</Title>
      <MainContainer>
        <LeftOne>
          <TopLeftOne>
            <img className="pic1" src={hero1} alt="sticky note" />
            <img className="pic2" src={hero3} alt="sticky note" />
          </TopLeftOne>
          <MiddleLeftOne>
            <img className="pic2" src={hero8} alt="sticky note" />
          </MiddleLeftOne>
          <BottomLeftOne>
            <img className="pic3" src={hero7} alt="sticky note" />
          </BottomLeftOne>
        </LeftOne>
        <LeftTwo>
          <TopLeftTwo>
            <img className="pic1" src={hero1} alt="sticky note" />
          </TopLeftTwo>
          <MiddleLeftTwo>
            <img className="pic1" src={hero4} alt="sticky note" />
            <img className="pic2" src={hero9} alt="sticky note" />
          </MiddleLeftTwo>
          <BottomLeftTwo>
            <img className="pic1" src={hero10} alt="sticky note" />
            <img className="pic2" src={hero2} alt="sticky note" />
          </BottomLeftTwo>
        </LeftTwo>
        <RightOne>
          <TopRightOne>
            <img className="pic1" src={hero10} alt="sticky note" />
            <img className="pic2" src={hero2} alt="sticky note" />
          </TopRightOne>

          <BottomRightOne>
            <img className="pic1" src={hero2} alt="sticky note" />
          </BottomRightOne>
        </RightOne>
        <RightTwo>
          <TopRightTwo>
            <img className="pic1" src={hero1} alt="sticky note" />
            <img className="pic2" src={hero3} alt="sticky note" />
          </TopRightTwo>
          <MiddleRightTwo>
            <img className="pic3" src={hero8} alt="sticky note" />
          </MiddleRightTwo>
          <BottomRightTwo>
            <img className="pic3" src={hero7} alt="sticky note" />
          </BottomRightTwo>
        </RightTwo>
      </MainContainer>
    </>
  );
};

export default SectionTwo;
