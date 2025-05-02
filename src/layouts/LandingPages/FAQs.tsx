import React from 'react';
import { Collapse } from 'antd';
import styled from '@emotion/styled';
import Logo from '@/assets/confused.png';

const { Panel } = Collapse;

const faqData = [
  {
    question: 'What is SarvTools?',
    answer: `SarvTools is a privacy-focused, client-side toolbox offering over 50+ tools across categories like Developer Utilities, Text Processing, Image Tools, Financial Calculators, Privacy Tools, and more.`,
  },
  {
    question: 'Who can benefit from SarvTools?',
    answer: `SarvTools is designed for a wide range of users, including developers, writers, designers, marketers, students, and anyone looking for quick and efficient online tools.`,
  },
  {
    question: 'Are the tools free to use?',
    answer: `Yes, all tools on SarvTools are completely free to use. Additionally, all processing happens on your device, ensuring your data remains private.`,
  },
  {
    question: 'What are some popular tools in SarvTools?',
    answer: `Some of our most popular tools include the Code Formatter, JSON Validator, Image Compressor, Loan Calculator, Password Generator, and QR Code Generator.`,
  },
  {
    question: 'How does SarvTools ensure privacy?',
    answer: `SarvTools processes all data client-side, meaning no data is sent to any server. This ensures complete privacy and security for your information.`,
  },
  {
    question: 'Can I contribute to SarvTools?',
    answer: `Yes, SarvTools is open-source! You can contribute by adding new tools or improving existing ones. Visit our GitHub repository to get started.`,
  },
  {
    question: 'Do I need to install anything to use SarvTools?',
    answer: `No installation is required. SarvTools is a web-based platform that works directly in your browser.`,
  },
];

const StyledCollapse = styled(Collapse)`
  .ant-collapse-header {
    font-weight: bold;
  }
  .ant-collapse-content-box {
    font-size: 16px;
  }
`;

const Styled = styled.div`
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
      @media (max-width: 768px) {
        font-size: 36px;
      }
    }
  }
`;

const FAQs: React.FC = () => {
  return (
    <Styled className="container">
      <div className="section left-section">
        <img src={Logo} alt="logo" className="logo-container" />
      </div>
      <div className="section right-section">
        <div className="headline">Frequently Asked Questions</div>
        <StyledCollapse accordion bordered={false}>
          {faqData.map((item, index) => (
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
