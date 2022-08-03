import React from 'react';
import styled from 'styled-components';
import Chip from '../images/chip.jpg';
import Coffee from '../images/coffee.jpg';
import Coffee2 from '../images/coffee2.jpg';
import Coldbrew from '../images/coldbrew.jpg';
import Dinner from '../images/dinner.jpg';
import Dinner2 from '../images/dinner2.jpg';
import Drums from '../images/drums.jpg';
import Flower from '../images/flower.jpg';
import Gummy from '../images/gummy.jpg';
import Orange from '../images/orange.jpg';
import Orange2 from '../images/orange2.jpg';
import Orange3 from '../images/orange3.jpg';
import Palm from '../images/palm.jpg';
import Pink from '../images/pink.jpg';
import Pink2 from '../images/pink2.jpg';
import Plant2 from '../images/plant2.jpg';
import Rainbow from '../images/rainbow.jpg';
import Room from '../images/room.jpg';
import Sculpture from '../images/sculpture.jpg';
import Surf from '../images/surf.jpg';
import Surf2 from '../images/surf2.jpg';
import Surfboards from '../images/surfboards.jpg';
import Swamp from '../images/swamp.jpg';

const MainContainer = styled.div`
  height: 80vh;
  width: 100vw;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='100' height='120' viewport='0 0 100 100' style='fill:black;font-size:60px;'><text y='50%'>🐁</text></svg>")
      16 0,
    auto;
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
    :hover {
      box-shadow: 1px 1px;
      border-radius: 2px;
    }
  }

  .pic2 {
    height: 99%;
    width: 50%;
    padding-left: 1%;
    :hover {
      box-shadow: 1px 1px;
      border-radius: 2px;
    }
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
    :hover {
      box-shadow: 1px 1px;
      border-radius: 2px;
    }
  }
`;

const BottomLeftOne = styled.div`
  height: 33.3%;
  width: 100%;
  background-color: white;

  .pic3 {
    height: 99%;
    width: 99%;
    :hover {
      box-shadow: 1px 1px;
      border-radius: 2px;
    }
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
    :hover {
      box-shadow: 1px 1px;
      border-radius: 2px;
    }
  }
`;

const MiddleLeftTwo = styled.div`
  height: 30%;
  width: 100%;
  background-color: white;

  .pic1 {
    height: 99%;
    width: 48%;
    :hover {
      box-shadow: 1px 1px;
      border-radius: 2px;
    }
  }

  .pic2 {
    height: 99%;
    width: 50%;
    padding-left: 1%;
    :hover {
      box-shadow: 1px 1px;
      border-radius: 2px;
    }
  }
`;

const BottomLeftTwo = styled.div`
  height: 30%;
  width: 100%;
  background-color: white;

  .pic1 {
    height: 99%;
    width: 48%;
    :hover {
      box-shadow: 1px 1px;
      border-radius: 2px;
    }
  }

  .pic2 {
    height: 99%;
    width: 50%;
    padding-left: 1%;
    :hover {
      box-shadow: 1px 1px;
      border-radius: 2px;
    }
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
    :hover {
      box-shadow: 1px 1px;
      border-radius: 2px;
    }
  }

  .pic2 {
    height: 99%;
    width: 50%;
    padding-left: 1%;
    :hover {
      box-shadow: 1px 1px;
      border-radius: 2px;
    }
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
    height: 100%;
    width: 99%;
    :hover {
      box-shadow: 1px 1px;
      border-radius: 2px;
    }
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
    :hover {
      box-shadow: 1px 1px;
      border-radius: 2px;
    }
  }

  .pic2 {
    height: 99%;
    width: 50%;
    padding-left: 1%;
    :hover {
      box-shadow: 1px 1px;
      border-radius: 2px;
    }
  }
`;

const MiddleRightTwo = styled.div`
  height: 33.3%;
  width: 100%;
  background-color: white;

  .pic3 {
    height: 99%;
    width: 99%;
    :hover {
      box-shadow: 1px 1px;
      border-radius: 2px;
    }
  }
`;

const BottomRightTwo = styled.div`
  height: 33.3%;
  width: 100%;
  background-color: white;

  .pic3 {
    height: 99%;
    width: 99%;
    :hover {
      box-shadow: 1px 1px;
      border-radius: 2px;
    }
  }
`;

const SectionTwo = () => {
  return (
    <>
      <Title>Our Daily Inspo</Title>
      <MainContainer>
        <LeftOne>
          <TopLeftOne>
            <img className="pic1" src={Chip} alt="sticky note" />
            <img className="pic2" src={Palm} alt="sticky note" />
          </TopLeftOne>
          <MiddleLeftOne>
            <img className="pic2" src={Flower} alt="sticky note" />
          </MiddleLeftOne>
          <BottomLeftOne>
            <img className="pic3" src={Orange3} alt="sticky note" />
          </BottomLeftOne>
        </LeftOne>
        <LeftTwo>
          <TopLeftTwo>
            <img className="pic1" src={Surf} alt="sticky note" />
          </TopLeftTwo>
          <MiddleLeftTwo>
            <img className="pic1" src={Drums} alt="sticky note" />
            <img className="pic2" src={Coffee} alt="sticky note" />
          </MiddleLeftTwo>
          <BottomLeftTwo>
            <img className="pic1" src={Plant2} alt="sticky note" />
            <img className="pic2" src={Dinner} alt="sticky note" />
          </BottomLeftTwo>
        </LeftTwo>
        <RightOne>
          <TopRightOne>
            <img className="pic1" src={Coldbrew} alt="sticky note" />
            <img className="pic2" src={Surfboards} alt="sticky note" />
          </TopRightOne>
          <BottomRightOne>
            <img className="pic1" src={Surf2} alt="sticky note" />
          </BottomRightOne>
        </RightOne>
        <RightTwo>
          <TopRightTwo>
            <img className="pic1" src={Dinner2} alt="sticky note" />
            <img className="pic2" src={Pink} alt="sticky note" />
          </TopRightTwo>
          <MiddleRightTwo>
            <img className="pic3" src={Sculpture} alt="sticky note" />
          </MiddleRightTwo>
          <BottomRightTwo>
            <img className="pic3" src={Swamp} alt="sticky note" />
          </BottomRightTwo>
        </RightTwo>
      </MainContainer>
    </>
  );
};

export default SectionTwo;
