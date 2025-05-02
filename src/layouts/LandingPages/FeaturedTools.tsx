import React from 'react';
import styled from '@emotion/styled';
import { useSiteConfig } from '@/contexts/SiteConfigContext';
import MiniCard from '@/components/common/Atoms/MiniCard';
import { Row, Col, Typography } from 'antd';
import { theme } from '@/styles';

const { Title } = Typography;

const Section = styled.section`
  width: 90%;
  max-width: 1600px;
  @media (max-width: 900px) {
    width: 100%;
    padding: 0 16px;
  }
  margin: 0 auto;
  padding: 48px 16px 32px 16px;
  background: ${theme.colors.background2};
  border-radius: ${theme.borders.radius};
  box-shadow: ${theme.shadows.medium};
  display: flex;
  flex-direction: row;
  align-items: stretch;
  gap: 48px;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 24px;
    padding: 24px 4px;
    border-radius: ${theme.borders.sRadius};
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  .logo-container {
    max-width: 340px;
    width: 100%;
    height: auto;
    @media (max-width: 900px) {
      max-width: 220px;
    }
  }
`;

const CardsGrid = styled(Row)`
  width: 100%;
  margin-top: 32px;
  row-gap: 32px;
  column-gap: 0;
  justify-content: flex-start;
`;

const FeaturedTools: React.FC = () => {
  const config = useSiteConfig();
  const { tools } = config;
  return (
    <Section className="container">
      <Left>
        <Title
          level={2}
          style={{ textAlign: 'left', color: theme.colors.primary }}
        >
          {config.headlines.modernTool}
        </Title>
        <CardsGrid gutter={[12, 12]}>
          {tools.map((tool) => (
            <Col
              key={tool.id}
              xs={12}
              sm={12}
              md={10}
              lg={8}
              style={{ display: 'flex', justifyContent: 'left' }}
            >
              <MiniCard title={tool.name} description={tool.description} />
            </Col>
          ))}
        </CardsGrid>
      </Left>
      <Right className="section right-section">
        <img
          src={require('@/assets/ai.png')}
          alt="Featured tools illustration"
          className="logo-container"
        />
      </Right>
    </Section>
  );
};

export default FeaturedTools;
