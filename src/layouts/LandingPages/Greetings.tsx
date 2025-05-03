import React from 'react';
import { PROJECT_NAME } from '@/constants/common';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import Logo from '@/assets/logo.png';
import styled from '@emotion/styled';
import { theme } from '@/styles';
import { useSiteConfig } from '@/contexts/SiteConfigContext';

const Styled = styled.div`
  min-height: 80vh;
  .hi-container {
    height: fit-content;
    margin: -2vw 0;
    img {
      width: 20vw;
    }
  }
  .headline {
    font-size: ${theme.fontSizes.xxxLarge};
    font-family: ${theme.fonts.headline};
    font-weight: 700;
    @media (max-width: 768px) {
      font-size: ${theme.fontSizes.xxxxLarge};
    }
  }
  .sub-headline {
    font-size: ${theme.fontSizes.large};
    font-weight: 400;
  }
`;
const Greetings = () => {
  const navigate = useNavigate();
  const config = useSiteConfig();

  const getStarted = () => {
    navigate('/tools');
  };

  const scrollDown = () => {
    window.scrollBy(0, window.innerHeight);
  };

  return (
    <Styled className="container">
      <div className="hi-container">
        <img src={Logo} alt="logo" />
      </div>
      <div className="headline">{config.headlines.greeting}</div>
      <div className="sub-headline">{config.subHeadlines.greeting}</div>
      <div className="content-container">
        <Button type="default" size="large" onClick={scrollDown}>
          {config.buttons.learnMore}
        </Button>
        <Button type="primary" onClick={getStarted} size="large">
          {config.buttons.getStarted}
        </Button>
      </div>
    </Styled>
  );
};

export default Greetings;
