import React from 'react';
import { Layout, Typography } from 'antd';
import styled from '@emotion/styled';
import { PROJECT_NAME } from '@/constants/common';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const Container = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: auto;
`;

const TermsOfService: React.FC = () => {
  return (
    <Layout>
      <Content style={{ padding: '0 50px', marginTop: 64 }}>
        <Container>
          <Title level={2}>Terms of Service</Title>
          <Paragraph>Last Updated: May 3, 2025</Paragraph>
          <Paragraph>
            Welcome to SarvTools! By using SarvTools, you agree to these Terms of Service. Please read them carefully.
          </Paragraph>
          <Title level={3}>1. Service Description</Title>
          <Paragraph>
            SarvTools provides a collection of free, privacy-focused, client-side tools for developers, students, and professionals. All tools run in your browser and do not require registration or installation.
          </Paragraph>
          <Title level={3}>2. Privacy & Data</Title>
          <Paragraph>
            SarvTools does not collect, store, or transmit any personal data. All processing is performed locally in your browser. For more details, see our Privacy Policy.
          </Paragraph>
          <Title level={3}>3. User Responsibilities</Title>
          <Paragraph>
            You agree to use SarvTools for lawful purposes only. Do not use the tools for any activity that is illegal, harmful, or infringes on the rights of others.
          </Paragraph>
          <Title level={3}>4. Open Source & Contributions</Title>
          <Paragraph>
            SarvTools is open-source. Contributions are welcome via our GitHub repository. By contributing, you agree that your submissions may be used, modified, and distributed under the project’s open-source license (MIT).
          </Paragraph>
          <Title level={3}>5. No Warranty</Title>
          <Paragraph>
            SarvTools is provided “as is” and without warranties of any kind. We do not guarantee the accuracy, reliability, or availability of any tool. Use at your own risk.
          </Paragraph>
          <Title level={3}>6. Limitation of Liability</Title>
          <Paragraph>
            To the fullest extent permitted by law, SarvTools and its contributors are not liable for any damages or losses resulting from your use of the site or tools.
          </Paragraph>
          <Title level={3}>7. Changes to Terms</Title>
          <Paragraph>
            We may update these Terms of Service at any time. Continued use of SarvTools after changes means you accept the new terms.
          </Paragraph>
          <Title level={3}>8. Contact</Title>
          <Paragraph>
            For questions about these terms, contact hopanshgahlot@gmail.com.
          </Paragraph>
        </Container>
      </Content>
    </Layout>
  );
};

export default TermsOfService;
