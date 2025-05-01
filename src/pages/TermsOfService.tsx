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
          <Paragraph>Last Updated: June 17, 2024</Paragraph>
          <Paragraph>
            Welcome to {PROJECT_NAME}! These Terms of Service ("Terms") govern
            your use of the {PROJECT_NAME} application and website ("Service")
            provided by Quizochestrator, Inc. ("we", "us", "our"). By accessing
            or using our Service, you agree to comply with and be bound by these
            Terms.
          </Paragraph>
          <Title level={3}>1. Acceptance of Terms</Title>
          <Paragraph>
            By accessing or using the Service, you agree to these Terms and any
            policies referenced herein. If you do not agree to these Terms, you
            may not use the Service.
          </Paragraph>
          <Title level={3}>2. Changes to Terms</Title>
          <Paragraph>
            We reserve the right to modify these Terms at any time. Any changes
            will be effective immediately upon posting the updated Terms on our
            website. Your continued use of the Service after the posting of
            changes constitutes your acceptance of such changes.
          </Paragraph>
          <Title level={3}>3. Account Registration</Title>
          <Paragraph>
            To use certain features of the Service, you must register for an
            account. You agree to provide accurate, current, and complete
            information during the registration process and to update such
            information to keep it accurate, current, and complete. You are
            responsible for safeguarding your account password and for any
            activities or actions under your account.
          </Paragraph>
          <Title level={3}>4. User Conduct</Title>
          <Paragraph>
            You agree to use the Service only for lawful purposes and in
            accordance with these Terms. You agree not to:
          </Paragraph>
          <Paragraph>
            - Violate any applicable laws or regulations.
            <br />
            - Infringe the rights of any third party, including intellectual
            property rights.
            <br />
            - Transmit any material that is defamatory, obscene, offensive, or
            otherwise objectionable.
            <br />- Engage in any conduct that restricts or inhibits any other
            user's use or enjoyment of the Service.
          </Paragraph>
          <Title level={3}>5. Intellectual Property</Title>
          <Paragraph>
            All content, features, and functionality of the Service, including
            but not limited to text, graphics, logos, and software, are the
            exclusive property of Quizochestrator, Inc. and are protected by
            intellectual property laws. You may not reproduce, distribute,
            modify, or create derivative works of any content without our prior
            written consent.
          </Paragraph>
          <Title level={3}>6. User-Generated Content</Title>
          <Paragraph>
            You may submit content to the Service, including quizzes and
            questions. By submitting content, you grant us a non-exclusive,
            royalty-free, worldwide license to use, reproduce, modify, and
            distribute your content in connection with the Service. You
            represent and warrant that you have the right to submit the content
            and that it does not infringe any third-party rights.
          </Paragraph>
          <Title level={3}>7. Termination</Title>
          <Paragraph>
            We may terminate or suspend your account and access to the Service
            at our sole discretion, without prior notice or liability, for any
            reason, including if you breach these Terms. Upon termination, your
            right to use the Service will immediately cease.
          </Paragraph>
          <Title level={3}>8. Disclaimer of Warranties</Title>
          <Paragraph>
            The Service is provided on an "AS IS" and "AS AVAILABLE" basis. We
            disclaim all warranties, whether express or implied, including but
            not limited to implied warranties of merchantability, fitness for a
            particular purpose, and non-infringement. We do not warrant that the
            Service will be uninterrupted, secure, or error-free.
          </Paragraph>
          <Title level={3}>9. Limitation of Liability</Title>
          <Paragraph>
            To the fullest extent permitted by law, in no event shall
            Quizochestrator, Inc., its affiliates, directors, employees, or
            agents be liable for any indirect, incidental, special,
            consequential, or punitive damages, or any loss of profits or
            revenues, whether incurred directly or indirectly, or any loss of
            data, use, goodwill, or other intangible losses, resulting from (i)
            your use or inability to use the Service; (ii) any unauthorized
            access to or use of our servers and/or any personal information
            stored therein; (iii) any interruption or cessation of transmission
            to or from the Service; (iv) any bugs, viruses, trojan horses, or
            the like that may be transmitted to or through the Service by any
            third party; (v) any errors or omissions in any content or for any
            loss or damage incurred as a result of the use of any content
            posted, emailed, transmitted, or otherwise made available through
            the Service; and/or (vi) the defamatory, offensive, or illegal
            conduct of any third party.
          </Paragraph>
          <Title level={3}>10. Indemnification</Title>
          <Paragraph>
            You agree to defend, indemnify, and hold harmless Quizochestrator,
            Inc., its affiliates, and their respective officers, directors,
            employees, and agents from and against any claims, liabilities,
            damages, judgments, awards, losses, costs, expenses, or fees
            (including reasonable attorneys' fees) arising out of or relating to
            your violation of these Terms or your use of the Service.
          </Paragraph>
          <Title level={3}>11. Governing Law</Title>
          <Paragraph>
            These Terms and any disputes related thereto will be governed by and
            construed in accordance with the laws of the State of [Your State],
            without regard to its conflict of law principles. Any legal action
            or proceeding arising under these Terms will be brought exclusively
            in the federal or state courts located in [Your City], and the
            parties hereby consent to the personal jurisdiction and venue
            therein.
          </Paragraph>
          <Title level={3}>12. Contact Information</Title>
          <Paragraph>
            If you have any questions about these Terms, please contact us at:
          </Paragraph>
          <Paragraph>Email: hopanshgahlot@gmail.com</Paragraph>
          <Paragraph>Thank you for using {PROJECT_NAME}!</Paragraph>
        </Container>
      </Content>
    </Layout>
  );
};

export default TermsOfService;
