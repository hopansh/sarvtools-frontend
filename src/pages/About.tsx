import React from 'react';
import { Card, Typography, Space, Divider } from 'antd';
import {
  InfoCircleOutlined,
  SettingOutlined,
  GlobalOutlined,
  MailOutlined,
  InstagramOutlined,
  ContactsOutlined,
} from '@ant-design/icons';
import styled from '@emotion/styled';
import { PROJECT_NAME } from '@/constants/common';
import Logo from '@/assets/mobile.png';
import AboutUs from '@/assets/aboutUs3D.png';
import FloatingObjectsBackground from '@/components/common/Atoms/FloatingContent';

const { Title, Paragraph } = Typography;

const Styled = styled.div`
  .about-main,
  .contact-us-container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 80px;
    padding: 20px;
    @media (max-width: 768px) {
      flex-direction: column;
      gap: 20px;
    }
    .about-logo {
      width: 300px;
      @media (max-width: 768px) {
        width: 100%;
      }
    }
  }
`;
const About: React.FC = () => {
  return (
    <Styled className="container">
      <FloatingObjectsBackground />
      <Card style={{ margin: '20px', background: 'transparent' }}>
        <Title level={2}>About {PROJECT_NAME}</Title>
        <Divider />
        <Space direction="vertical" size="large" style={{ display: 'flex' }}>
          <div className="about-main">
            <img src={AboutUs} alt="logo" className="about-logo" />
            <Paragraph>
              Welcome to <strong>{PROJECT_NAME}</strong>, a comprehensive
              educational tool designed to simplify the learning and job-seeking
              process for students and freshers. {PROJECT_NAME} offers three
              main features: Automatic Quiz Generation, Notes Generation, and
              Job Hunt assistance for freshers. Whether you're a student looking
              to enhance your study methods or a recent graduate starting your
              career, {PROJECT_NAME} provides valuable resources to support your
              journey.
            </Paragraph>
          </div>
          <Title level={3}>
            <InfoCircleOutlined /> Key Features
          </Title>
          <Paragraph>
            <ul>
              <li>
                <strong>Automatic Quiz Generation:</strong> Provide a web URL or
                upload a document, and {PROJECT_NAME} will automatically create
                a quiz based on the content.
              </li>
              <li>
                <strong>Notes Generator:</strong> Transform lengthy texts or
                documents into concise, easy-to-understand notes.
              </li>
              <li>
                <strong>Job Hunt for Freshers:</strong> Access curated job
                listings tailored for recent graduates and entry-level
                positions.
              </li>
              <li>
                <strong>Easy Organization:</strong> Manage all your quizzes and
                notes in one place with our intuitive interface.
              </li>
              <li>
                <strong>Customizable Settings:</strong> Tailor the quizzes and
                notes to suit your needs with various customization options.
              </li>
              <li>
                <strong>User Friendly Dashboard:</strong> Navigate through all
                features with ease using our clean and simple dashboard.
              </li>
            </ul>
          </Paragraph>
          <Title level={3}>
            <SettingOutlined /> Why {PROJECT_NAME}?
          </Title>
          <Paragraph>
            {PROJECT_NAME} is your all-in-one solution for academic success and
            career kickstart. It not only saves you time in creating study
            materials but also streamlines your job search process. Our app
            ensures high-quality content generation and provides valuable
            resources to help you excel in your studies and land your dream job.
          </Paragraph>
          <Title level={3}>
            <GlobalOutlined /> Getting Started
          </Title>
          <Paragraph>
            <ol>
              <li>
                <strong>Explore Features:</strong> Navigate through our Quiz
                Generator, Notes Generator, and Job Hunt sections.
              </li>
              <li>
                <strong>Input Content:</strong> For quizzes and notes, enter a
                web URL or upload a document (.pdf/.txt).
              </li>
              <li>
                <strong>Generate Content:</strong> Let our app create quizzes or
                notes based on your input.
              </li>
              <li>
                <strong>Customize:</strong> Adjust settings to fit your specific
                requirements.
              </li>
              <li>
                <strong>Job Search:</strong> Browse job listings, create your
                profile, and start applying.
              </li>
            </ol>
          </Paragraph>
        </Space>
        <Divider />
        <Title level={2}>
          <ContactsOutlined /> Contact Us
        </Title>
        <Divider />
        <div className="contact-us-container">
          <Space direction="vertical" size="small" style={{ display: 'flex' }}>
            <Paragraph>
              We'd love to hear from you! If you have any questions,
              suggestions, or need support, feel free to reach out to us through
              the following channels:
            </Paragraph>
            <Title level={3}>
              <MailOutlined /> Email
            </Title>
            <Paragraph>
              <a href="mailto:hopanshgahlot@gmail.com">
                hopanshgahlot@gmail.com
              </a>
            </Paragraph>
            <Title level={3}>
              <InstagramOutlined /> Instagram
            </Title>
          </Space>
          <img
            src={Logo}
            alt="logo"
            className="logo-container"
            height={'120px'}
            width={'120px'}
          />
        </div>
      </Card>
    </Styled>
  );
};

export default About;
