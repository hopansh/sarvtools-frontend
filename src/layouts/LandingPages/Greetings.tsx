import React from 'react';
import { PROJECT_NAME } from '@/constants/common';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import Logo from '@/assets/logo.png';
import styled from '@emotion/styled';
import { theme } from '@/styles';

const Styled = styled.div`
  padding-bottom: 180px;
  @media (max-width: 768px) {
    padding-bottom: 50px;
  }
  .hi-container {
    width: 150px;
    height: auto;
    @media (max-width: 768px) {
      width: 80px;
    }
  }
  .headline{
    font-size: ${theme.fontSizes.xxxxxLarge};
    font-family: ${theme.fonts.headline};
  }
    .sub-headline {
    font-size: ${theme.fontSizes.large};
    font-weight: 400;
    font-family: ${theme.fonts.subHeadline};
`;
const Greetings = () => {
  const navigate = useNavigate();

  const getStarted = () => {
    navigate('/tools');
  };

  const scrollDown = () => {
    window.scrollBy(0, window.innerHeight);
  };

  return (
    <Styled className="container">
      <img src={Logo} alt="logo" className="hi-container levitate" />
      <div className="headline">{PROJECT_NAME}</div>
      <div className="sub-headline">
        A privacy-focused toolbox offering 50+ tools for developers, writers,
        designers, and more.
        <br />
        Explore tools across categories like Developer Utilities, Text
        Processing, Image Tools, Financial Calculators, and more.
      </div>
      <div className="content-container">
        <Button type="default" size="large" onClick={scrollDown}>
          Learn More
        </Button>
        <Button type="primary" onClick={getStarted} size="large">
          Get Started
        </Button>
      </div>
    </Styled>
  );
};

export default Greetings;
