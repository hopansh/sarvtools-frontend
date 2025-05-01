import React from 'react';
import { Global } from '@emotion/react';
import { globalStyles } from '@/styles/globalStyles';
import About from './pages/About';
import HeaderSection from '@/layouts/Header';
import FooterSection from '@/layouts/Footer';
import styled from '@emotion/styled';
import { Route, Routes } from 'react-router-dom';
import { HEADER_HEIGHT, MOBILE_HEADER_HEIGHT } from '@/constants/styles';
import Wrapper from './components/common/Wrapper';
import Home from './pages/Home';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/DataPrivacy';
import { categories } from './constants/tools';
import Tools from './pages/Tools';

const Styled = styled.div`
  width: 100vw;
  min-height: 100vh;
  .body {
    padding-top: ${HEADER_HEIGHT};
    min-height: 100vh;
    @media (max-width: 768px) {
      padding-top: ${MOBILE_HEADER_HEIGHT};
    }
  }
`;

function App() {

  return (
    <Wrapper>
      <Global styles={globalStyles} />
      <Styled>
        <HeaderSection />
        <div className="body">
          <Routes>
            <Route path="*" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<About />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            {categories.map((category) => (
              <Route
                key={category.name}
                path={`/tools/${category.id}`}
                element={<Tools category={category} />}
              />
            ))}
            {categories.map((category) =>
              category.tools.map((tool) => (
                <Route
                  key={tool.id}
                  path={`/tools/${category.id}/${tool.id}`}
                  element={<Tools category={category} tool={tool} />}
                />
              )),
            )}
            <Route path="/tools" element={<Tools />} />
          </Routes>
        </div>
        <FooterSection />
      </Styled>
    </Wrapper>
  );
}

export default App;
