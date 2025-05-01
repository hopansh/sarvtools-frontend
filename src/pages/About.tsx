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
              Welcome to <strong>SarvTools.in</strong>, a zero-server, privacy-focused toolbox designed to empower developers, students, and professionals with a wide range of utilities. With over 50+ tools across various categories, SarvTools.in ensures 100% client-side processing, keeping your data private and secure.
            </Paragraph>
          </div>
          <Title level={3}>
            <InfoCircleOutlined /> Key Features
          </Title>
          <Paragraph>
            <ul>
              <li>
                <strong>Privacy-Focused:</strong> All tools run entirely on your browser, ensuring no data leaves your device.
              </li>
              <li>
                <strong>Developer Tools:</strong> JSON Formatter, Regex Tester, Base64 Converter, and more to enhance productivity.
              </li>
              <li>
                <strong>Utility Tools:</strong> Color Converter, Timestamp Converter, Lorem Ipsum Generator, and others for everyday tasks.
              </li>
              <li>
                <strong>Open Source:</strong> Contribute to the project and add your own tools to the platform.
              </li>
              <li>
                <strong>User-Friendly Interface:</strong> Navigate through tools effortlessly with a clean and intuitive design.
              </li>
            </ul>
          </Paragraph>
          <Title level={3}>
            <SettingOutlined /> Why SarvTools.in?
          </Title>
          <Paragraph>
            SarvTools.in is your go-to solution for quick, reliable, and secure tools. Whether you're a developer debugging code, a student working on assignments, or a professional managing tasks, SarvTools.in provides a comprehensive suite of tools to simplify your workflow.
          </Paragraph>
          <Title level={3}>
            <GlobalOutlined /> Getting Started
          </Title>
          <Paragraph>
            <ol>
              <li>
                <strong>Explore Tools:</strong> Browse through our extensive collection of tools across categories.
              </li>
              <li>
                <strong>Use Instantly:</strong> No sign-ups or installations required. Just open a tool and start using it.
              </li>
              <li>
                <strong>Contribute:</strong> Add new tools or improve existing ones by contributing to our open-source repository.
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
              We'd love to hear from you! If you have any questions, suggestions, or need support, feel free to reach out to us through the following channels:
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
            <Paragraph>
              <a href="https://instagram.com/sarvtools" target="_blank" rel="noopener noreferrer">
                @sarvtools
              </a>
            </Paragraph>
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