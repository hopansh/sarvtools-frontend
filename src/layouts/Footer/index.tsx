import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { PROJECT_NAME } from '@/constants/common';
import { FOOTER_HEIGHT, MOBILE_FOOTER_HEIGHT } from '@/constants/styles';
import { theme } from '@/styles';
import { Row, Col, Typography, Space } from 'antd';
import {
  GithubOutlined,
  LinkedinOutlined,
  InstagramOutlined,
} from '@ant-design/icons';
import { useSiteConfig } from '@/contexts/SiteConfigContext';

const { Title, Text } = Typography;

const StyledFooter = styled.footer`
  background: ${theme.colors.tertiary};
  color: ${theme.colors.white};
  padding: 40px 0;
  width: 100%;
  min-height: ${FOOTER_HEIGHT};

  @media (max-width: 768px) {
    min-height: ${MOBILE_FOOTER_HEIGHT};
    padding: 20px 0;
    text-align: center;
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const FooterTitle = styled(Title)`
  color: ${theme.colors.white} !important;
  margin-bottom: 20px !important;
`;

const FooterLink = styled(Link)`
  color: ${theme.colors.white};
  text-decoration: none;
  transition: color 0.3s ease;
  &:hover {
    color: ${theme.colors.primary};
  }
`;

const SocialIcon = styled.a`
  color: ${theme.colors.white};
  font-size: 24px;
  margin-right: 16px;
  transition: color 0.3s ease;

  &:hover {
    color: ${theme.colors.primary};
  }
`;

const Copyright = styled(Text)`
  color: ${theme.colors.white};
  opacity: 0.8;
`;

const FooterSection: React.FC = () => {
  const tools = useSiteConfig().tools;

  return (
    <StyledFooter>
      <FooterContent>
        <Row gutter={[32, 32]}>
          <Col xs={24} sm={12} md={6}>
            <FooterTitle level={4}>About Us</FooterTitle>
            <FooterLink to="/about">About {PROJECT_NAME}</FooterLink>
          </Col>
          <Col xs={24} sm={12} md={12}>
            <FooterTitle level={4}>Tools</FooterTitle>
            {tools.map((tool) => (
              <FooterLink key={tool.id} to={`/tools/${tool.id}`}>
                {tool.name}
                <br />
              </FooterLink>
            ))}
          </Col>
          <Col xs={24} sm={12} md={6}>
            <FooterTitle level={4}>Connect</FooterTitle>
            <FooterLink to="/contact">Contact Us</FooterLink>
            <br />
            <Space
              direction="horizontal"
              size="middle"
              style={{ marginTop: '10px' }}
            >
              <SocialIcon
                href="https://github.com/hopansh"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubOutlined />
              </SocialIcon>
              <SocialIcon
                href="https://linkedin.com/in/hopansh-gahlot-596406183/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinOutlined />
              </SocialIcon>
              <SocialIcon
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramOutlined />
              </SocialIcon>
            </Space>
          </Col>
        </Row>
        <Row justify="center" align="middle" style={{ marginTop: '40px' }}>
          <Col>
            <Copyright>
              {PROJECT_NAME} © {new Date().getFullYear()} All Rights Reserved
            </Copyright>
          </Col>
          <Col>
            <Space split={<span style={{ margin: '0 8px' }}>|</span>}>
              <FooterLink to="/terms-of-service">Terms of Service</FooterLink>
              <FooterLink to="/privacy-policy">Privacy Policy</FooterLink>
            </Space>
          </Col>
        </Row>
      </FooterContent>
    </StyledFooter>
  );
};

export default FooterSection;
