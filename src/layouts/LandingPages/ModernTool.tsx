import React from 'react';
import styled from '@emotion/styled';
import Logo from '@/assets/ai.png';
import { ToolOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { Typography, Space } from 'antd';
import { RootState } from '@/store/store';
import { theme } from '@/styles';
import MiniCard, { MiniCardProps } from '@/components/common/Atoms/MiniCard';
import { categories } from '@/constants/tools';

const { Title, Paragraph } = Typography;

const Styled = styled.div`
  text-align: left;
  flex-direction: row;
  align-items: center;
  padding: 48px;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    padding: 24px;
  }

  .section {
    width: 50%;

    @media (max-width: 768px) {
      width: 100%;
      margin-bottom: 24px;
    }
  }

  .left-section {
    padding-right: 48px;

    @media (max-width: 768px) {
      padding-right: 0;
    }
  }

  .headline {
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 24px;
    text-align: left;
    @media (max-width: 768px) {
      font-size: 36px;
      text-align: center;
    }
  }

  .sub-headline {
    font-size: 18px;
    margin-bottom: 32px;
    text-align: left;
    @media (max-width: 768px) {
      font-size: 16px;
      text-align: center;
    }
  }

  .feature-list {
    margin-top: 24px;
  }

  .feature-item {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  }

  .feature-icon {
    font-size: 24px;
    margin-right: 16px;
    color: ${theme.colors.primary};
  }

  .right-section {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .logo-container {
    max-width: 100%;
    height: auto;
  }
`;

const ModernTool = () => {

  const cards: MiniCardProps[] = categories.map(({ name, description }) => ({
    title: name,
    description,
    icon: <ToolOutlined />,
  }));

  return (
    <Styled className="container">
      <div className="section left-section">
        <Title level={1} className="headline">
          Discover Modern Tools for Every Need
        </Title>
        <Paragraph className="sub-headline">
          Explore a wide range of tools designed to simplify your tasks, from
          development to design, text processing, and more.
        </Paragraph>
        <Space direction="vertical" className="feature-list">
          <div className="card-container">
            {cards.map((card, index) => (
              <MiniCard key={index} {...card} />
            ))}
          </div>
        </Space>
      </div>
      <div className="section right-section">
        <img
          src={Logo}
          alt="Modern tools illustration"
          className="logo-container"
        />
      </div>
    </Styled>
  );
};

export default ModernTool;
