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
import { useThemeMode } from '@/contexts/ThemeContext';
import Branding from '@/components/common/Atoms/Branding';

const { Title, Text } = Typography;

const StyledFooter = styled.footer<{ theme: any }>`
  background: ${(props) => props.theme.colors.background2};
  color: ${(props) => props.theme.colors.primary};
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
  margin-bottom: 10px !important;
`;

const FooterLink = styled(Link)<{ theme: any }>`
  text-decoration: none;
  transition: color 0.3s ease;
  &:hover {
    color: ${(props) => props.theme.colors.secondary};
  }
`;

const SocialIcon = styled.a<{ theme: any }>`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 24px;
  margin-right: 8px;
  transition: color 0.3s ease;
  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`;

const Copyright = styled(Text)`
  opacity: 0.8;
`;

// Ensure FooterSection uses tools from siteConfigs
const FooterSection: React.FC = () => {
  const { tools } = useSiteConfig();
  const { theme } = useThemeMode();

  const mid = Math.ceil(tools.length / 2);
  const toolsCol1 = tools.slice(0, mid);
  const toolsCol2 = tools.slice(mid);

  return (
    <StyledFooter theme={theme}>
      <FooterContent>
        <Row justify="center" align="middle" style={{ marginBottom: '40px' }}>
          <Branding />
        </Row>
        <Row gutter={[32, 32]}>
          <Col xs={24} sm={12} md={6}>
            <FooterTitle level={4}>About Us</FooterTitle>
            <FooterLink theme={theme} to="/about">About</FooterLink>
          </Col>
          <Col xs={24} sm={12} md={12}>
            <FooterTitle level={4}>Tools</FooterTitle>
            <Row gutter={[0, 0]}>
              <Col xs={24} sm={12}>
                {toolsCol1.map((tool: { id: string; name: string }) => (
                  <FooterLink theme={theme} key={tool.id} to={`/tools/${tool.id}`}>
                    {tool.name}
                    <br />
                  </FooterLink>
                ))}
              </Col>
              <Col xs={24} sm={12}>
                {toolsCol2.map((tool: { id: string; name: string }) => (
                  <FooterLink theme={theme} key={tool.id} to={`/tools/${tool.id}`}>
                    {tool.name}
                    <br />
                  </FooterLink>
                ))}
              </Col>
            </Row>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <FooterTitle level={4}>Connect</FooterTitle>
            <Space direction="horizontal" size="middle">
              <SocialIcon
                theme={theme}
                href="https://github.com/hopansh"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubOutlined />
              </SocialIcon>
              <SocialIcon
                theme={theme}
                href="https://linkedin.com/in/hopansh-gahlot-596406183/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinOutlined />
              </SocialIcon>
            </Space>
          </Col>
        </Row>
        <Row justify="center" align="middle" style={{ marginTop: '40px' }}>
          <Col>
            <Space split={<span style={{ margin: '0 8px' }}>|</span>}>
              <FooterLink theme={theme} to="/terms-of-service">Terms of Service</FooterLink>
              <FooterLink theme={theme} to="/privacy-policy">Privacy Policy</FooterLink>
            </Space>
          </Col>
        </Row>
        <Row justify="center" align="middle" style={{ marginTop: '20px' }}>
          <Col>
            <Copyright>
              {PROJECT_NAME} © {new Date().getFullYear()} All Rights Reserved
            </Copyright>
          </Col>
        </Row>
      </FooterContent>
    </StyledFooter>
  );
};

export default FooterSection;
