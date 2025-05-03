import React from 'react';
import { Typography, Layout } from 'antd';
import styled from '@emotion/styled';

const { Title, Paragraph } = Typography;
const { Content } = Layout;

const Container = styled(Content)`
  padding: 50px;
  max-width: 800px;
  margin: auto;
`;

const PrivacyPolicy: React.FC = () => {
  return (
    <Container>
      <Title level={2}>Privacy Policy</Title>
      <Paragraph>Last updated: May 3, 2025</Paragraph>
      <Paragraph>
        SarvTools is a privacy-first, zero-server toolbox. We do not collect, store, or share any personal information. All tools run 100% client-side in your browser, and no data ever leaves your device.
      </Paragraph>
      <Title level={3}>What Information Do We Collect?</Title>
      <Paragraph>
        <b>None.</b> SarvTools does not collect, log, or transmit any personal or usage data. All processing is performed locally in your browser.
      </Paragraph>
      <Title level={3}>Cookies & Analytics</Title>
      <Paragraph>
        SarvTools does not use cookies, analytics, or tracking scripts. Your activity is never tracked or analyzed.
      </Paragraph>
      <Title level={3}>Third-Party Services</Title>
      <Paragraph>
        We do not use any third-party analytics, advertising, or tracking services. If you follow a link to a third-party site (e.g., GitHub), their privacy policy applies.
      </Paragraph>
      <Title level={3}>Data Security</Title>
      <Paragraph>
        Because all processing is local, your data never leaves your device. There is no risk of server-side data breaches or leaks.
      </Paragraph>
      <Title level={3}>Contact</Title>
      <Paragraph>
        If you have questions about privacy, contact us at hopanshgahlot@gmail.com.
      </Paragraph>
      <Paragraph>
        By using SarvTools, you agree to this privacy policy. This policy may be updated to reflect changes in our practices or for legal reasons. Please review it periodically.
      </Paragraph>
    </Container>
  );
};

export default PrivacyPolicy;
