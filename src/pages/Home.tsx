import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import Greetings from '@/layouts/LandingPages/Greetings';
import ModernTool from '@/layouts/LandingPages/ModernTool';
import FAQs from '@/layouts/LandingPages/FAQs';
import FeedbackForm from '@/layouts/LandingPages/Feedback';
import { useLocation } from 'react-router-dom';
import { theme } from '@/styles';

const Styled = styled.div`
  .headline {
    text-align: center;
    font-size: 48px;
    color: ${theme.colors.primary};
    @media (max-width: 768px) {
      font-size: 36px;
    }
  }
  .sub-headline {
    text-align: center;
    font-size: 24px;
    @media (max-width: 768px) {
      font-size: 18px;
    }
  }
  .caption {
    font-size: 14px;
    font-weight: 400;
    @media (max-width: 768px) {
      font-size: 12px;
    }
  }
  .logo-container {
    width: 70%;
    height: auto;
  }
`;
const components = [
  {
    element: Greetings,
    name: 'greetings',
  },
  {
    element: ModernTool,
    name: 'moderntool',
  },
  {
    element: FAQs,
    name: 'faq',
  },
  {
    element: FeedbackForm,
    name: 'feedback',
  },
];

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1));
      if (elem) elem.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <Styled>
      {components.map((Component, index) => (
        <div
          className={`container ${index % 2 ? 'container-even' : ''}`}
          key={index}
          id={`${Component.name}`}
        >
          <div
            className={`animation-wrapper ${index ? 'easeInAnimation' : ''}`}
          >
            <Component.element />
          </div>
        </div>
      ))}
    </Styled>
  );
};

export default Home;
