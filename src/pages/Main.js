import React from 'react';
import styled from 'styled-components';
import SectionOne from '../components /SectionOne';
import SectionThree from '../components /SectionThree';
import SectionTwo from '../components /SectionTwo';
import Header from '../components /Header';
import HeroPic from '../images/hero-6.jpg';

const TopContainer = styled.div`
  .hero-img {
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
    z-index: -1;
  }
`;

const Main = () => {
  return (
    <div>
      <TopContainer>
        <img src={HeroPic} alt="main-pic" className="hero-img" />
        <Header />
        <SectionOne />
      </TopContainer>
      <SectionTwo />
      <SectionThree />
    </div>
  );
};

export default Main;
