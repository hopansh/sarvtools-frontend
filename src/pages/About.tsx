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
import Logo from '@/assets/mobile.png';
import AboutUs from '@/assets/aboutUs3D.png';
import FloatingObjectsBackground from '@/components/common/Atoms/FloatingContent';
import { useSiteConfig } from '@/contexts/SiteConfigContext';
import { useThemeMode } from '@/contexts/ThemeContext';

const { Title, Paragraph } = Typography;

const Styled = styled.div<{ theme: any }>`
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
  const { content } = useSiteConfig();
  const { theme } = useThemeMode();
  const aboutContent = content.about;

  return (
    <Styled theme={theme} className="container">
      <FloatingObjectsBackground />
      <Card style={{ margin: '20px', background: 'transparent', color: theme.colors.text }}>
        <Title level={2} style={{ color: theme.colors.primary }}>{content.aboutHeadline}</Title>
        <Divider style={{ borderColor: theme.colors.secondary }} />
        <Space direction="vertical" size="large" style={{ display: 'flex' }}>
          <div className="about-main">
            <img src={AboutUs} alt="logo" className="about-logo" />
            <Paragraph style={{ color: theme.colors.text }}>{aboutContent.description}</Paragraph>
          </div>
          <Title level={3} style={{ color: theme.colors.primary }}>
            <InfoCircleOutlined /> Key Features
          </Title>
          <Paragraph style={{ color: theme.colors.text }}>
            <ul>
              {aboutContent.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </Paragraph>
          <Title level={3} style={{ color: theme.colors.primary }}>
            <SettingOutlined /> Why SarvTools.in?
          </Title>
          <Paragraph style={{ color: theme.colors.text }}>{aboutContent.whySarvTools}</Paragraph>
          <Title level={3} style={{ color: theme.colors.primary }}>
            <GlobalOutlined /> Getting Started
          </Title>
          <Paragraph style={{ color: theme.colors.text }}>
            <ol>
              {aboutContent.gettingStarted.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </Paragraph>
        </Space>
        <Divider style={{ borderColor: theme.colors.secondary }} />
        <Title level={2} style={{ color: theme.colors.primary }}>
          <ContactsOutlined /> Contact Us
        </Title>
        <Divider style={{ borderColor: theme.colors.secondary }} />
        <div className="contact-us-container">
          <Space direction="vertical" size="small" style={{ display: 'flex' }}>
            <Paragraph style={{ color: theme.colors.text }}>
              We&apos;d love to hear from you! If you have any questions, suggestions, or need support, feel free to reach out to us through the following channels:
            </Paragraph>
            <Title level={3} style={{ color: theme.colors.primary }}>
              <MailOutlined /> Email
            </Title>
            <Paragraph style={{ color: theme.colors.text }}>
              <a href={`mailto:${aboutContent.contact.email}`}>{aboutContent.contact.email}</a>
            </Paragraph>
            <Title level={3} style={{ color: theme.colors.primary }}>
              <InstagramOutlined /> Instagram
            </Title>
            <Paragraph style={{ color: theme.colors.text }}>
              <a href={aboutContent.contact.instagram} target="_blank" rel="noopener noreferrer">
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