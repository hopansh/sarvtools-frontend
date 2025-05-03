import React from 'react';
import { Collapse } from 'antd';
import styled from '@emotion/styled';
import Logo from '@/assets/confused.png';
import { useSiteConfig } from '@/contexts/SiteConfigContext';
import { useThemeMode } from '@/contexts/ThemeContext';

const { Panel } = Collapse;

const StyledCollapse = styled(Collapse)`
  .ant-collapse-header {
    font-weight: bold;
  }
  .ant-collapse-content-box {
    font-size: 16px;
  }
`;

const Styled = styled.div<{ theme: any }>`
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
  .section {
    width: 50%;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
  .left-section {
    text-align: center;
    padding: 0 10vw;
  }
  .right-section {
    gap: 24px;
    .headline {
      text-align: left;
      font-size: 54px;
      font-weight: 700;
      margin-bottom: 24px;
      color: ${(props) => props.theme.colors.primary};
      @media (max-width: 768px) {
        font-size: 36px;
      }
    }
  }
`;

const FAQs: React.FC = () => {
  const { content } = useSiteConfig();
  const { theme } = useThemeMode();
  const faqData = content.faqs;

  return (
    <Styled theme={theme} className="container">
      <div className="section left-section">
        <img src={Logo} alt="logo" className="logo-container" />
      </div>
      <div className="section right-section">
        <div className="headline">{content.faqHeadline}</div>
        <StyledCollapse accordion bordered={false}>
          {faqData.map((item: { question: string; answer: string }, index: number) => (
            <Panel header={item.question} key={index}>
              <p>{item.answer}</p>
            </Panel>
          ))}
        </StyledCollapse>
      </div>
    </Styled>
  );
};

export default FAQs;
