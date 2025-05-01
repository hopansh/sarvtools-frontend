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
import Tools from './pages/Tools';
import { SiteConfigProvider, useSiteConfig } from '@/contexts/SiteConfigContext';

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
  const tools = useSiteConfig().tools;

  return (
    <SiteConfigProvider>
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
              {tools.map((tool) => (
                <Route
                  key={tool.id}
                  path={`/tools/${tool.id}`}
                  element={<Tools tool={tool} />}
                />
              ))}

              <Route path="/tools" element={<Tools />} />
            </Routes>
          </div>
          <FooterSection />
        </Styled>
      </Wrapper>
    </SiteConfigProvider>
  );
}

export default App;
