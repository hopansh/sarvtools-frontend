import { useEffect } from 'react';
import styled from '@emotion/styled';
import Greetings from '@/layouts/LandingPages/Greetings';
import FAQs from '@/layouts/LandingPages/FAQs';
import FeedbackForm from '@/layouts/LandingPages/Feedback';
import { useLocation } from 'react-router-dom';
import FeaturedTools from '@/layouts/LandingPages/FeaturedTools';
import { useThemeMode } from '@/contexts/ThemeContext';

const Styled = styled.div<{ theme: any }>`
  .headline {
    text-align: center;
    font-size: 48px;
    color: ${(props) => props.theme.colors.primary};
    @media (max-width: 768px) {
      font-size: 36px;
    }
  }
  .sub-headline {
    text-align: center;
    font-size: 24px;
    color: ${(props) => props.theme.colors.text};
    @media (max-width: 768px) {
      font-size: 18px;
    }
  }
  .caption {
    font-size: 14px;
    font-weight: 400;
    color: ${(props) => props.theme.colors.subtext};
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
    element: FeaturedTools,
    name: 'featuredtools',
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
  const { theme } = useThemeMode();

  useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1));
      if (elem) elem.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <Styled theme={theme}>
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
