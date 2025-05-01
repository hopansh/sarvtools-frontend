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
      <Paragraph>Last updated: June 17, 2024</Paragraph>
      <Paragraph>
        This Privacy Policy describes how your personal information is
        collected, used, and shared when you visit or make a purchase from
        https://www.sarvtools.in (the “Site”).
      </Paragraph>

      <Title level={3}>PERSONAL INFORMATION WE COLLECT</Title>
      <Paragraph>
        When you visit the Site, we automatically collect certain information
        about your device, including information about your web browser, IP
        address, time zone, and some of the cookies that are installed on your
        device. Additionally, as you browse the Site, we collect information
        about the individual web pages or products that you view, what websites
        or search terms referred you to the Site, and information about how you
        interact with the Site. We refer to this automatically-collected
        information as “Device Information.”
      </Paragraph>
      <Paragraph>
        We collect Device Information using the following technologies:
      </Paragraph>
      <ul>
        <li>
          <Paragraph>
            “Cookies” are data files that are placed on your device or computer
            and often include an anonymous unique identifier. For more
            information about cookies, and how to disable cookies, visit
            http://www.allaboutcookies.org.
          </Paragraph>
        </li>
        <li>
          <Paragraph>
            “Log files” track actions occurring on the Site, and collect data
            including your IP address, browser type, Internet service provider,
            referring/exit pages, and date/time stamps.
          </Paragraph>
        </li>
        <li>
          <Paragraph>
            “Web beacons,” “tags,” and “pixels” are electronic files used to
            record information about how you browse the Site.
          </Paragraph>
        </li>
      </ul>

      <Paragraph>
        Additionally when you make a purchase or attempt to make a purchase
        through the Site, we collect certain information from you, including
        your name, billing address, shipping address, payment information
        (including credit card numbers), email address, and phone number. We
        refer to this information as “Order Information.”
      </Paragraph>

      <Paragraph>
        When we talk about “Personal Information” in this Privacy Policy, we are
        talking both about Device Information and Order Information.
      </Paragraph>

      <Title level={3}>HOW DO WE USE YOUR PERSONAL INFORMATION?</Title>
      <Paragraph>
        We use the Order Information that we collect generally to fulfill any
        orders placed through the Site (including processing your payment
        information, arranging for shipping, and providing you with invoices
        and/or order confirmations). Additionally, we use this Order Information
        to:
      </Paragraph>
      <ul>
        <li>
          <Paragraph>Communicate with you;</Paragraph>
        </li>
        <li>
          <Paragraph>
            Screen our orders for potential risk or fraud; and
          </Paragraph>
        </li>
        <li>
          <Paragraph>
            When in line with the preferences you have shared with us, provide
            you with information or advertising relating to our products or
            services.
          </Paragraph>
        </li>
      </ul>

      <Paragraph>
        We use the Device Information that we collect to help us screen for
        potential risk and fraud (in particular, your IP address), and more
        generally to improve and optimize our Site (for example, by generating
        analytics about how our customers browse and interact with the Site, and
        to assess the success of our marketing and advertising campaigns).
      </Paragraph>

      <Title level={3}>SHARING YOUR PERSONAL INFORMATION</Title>
      <Paragraph>
        We share your Personal Information with third parties to help us use
        your Personal Information, as described above. For example, we use
        Google Analytics to help us understand how our customers use the
        Site--you can read more about how Google uses your Personal Information
        here: https://www.google.com/intl/en/policies/privacy/. You can also
        opt-out of Google Analytics here:
        https://tools.google.com/dlpage/gaoptout.
      </Paragraph>

      <Paragraph>
        Finally, we may also share your Personal Information to comply with
        applicable laws and regulations, to respond to a subpoena, search
        warrant or other lawful request for information we receive, or to
        otherwise protect our rights.
      </Paragraph>

      <Title level={3}>YOUR RIGHTS</Title>
      <Paragraph>
        If you are a European resident, you have the right to access personal
        information we hold about you and to ask that your personal information
        be corrected, updated, or deleted. If you would like to exercise this
        right, please contact us through the contact information below.
      </Paragraph>
      <Paragraph>
        Additionally, if you are a European resident we note that we are
        processing your information in order to fulfill contracts we might have
        with you (for example if you make an order through the Site), or
        otherwise to pursue our legitimate business interests listed above.
        Additionally, please note that your information will be transferred
        outside of Europe, including to Canada and the United States.
      </Paragraph>

      <Title level={3}>DATA RETENTION</Title>
      <Paragraph>
        When you place an order through the Site, we will maintain your Order
        Information for our records unless and until you ask us to delete this
        information.
      </Paragraph>

      <Title level={3}>CHANGES</Title>
      <Paragraph>
        We may update this privacy policy from time to time in order to reflect,
        for example, changes to our practices or for other operational, legal,
        or regulatory reasons.
      </Paragraph>

      <Title level={3}>CONTACT US</Title>
      <Paragraph>
        For more information about our privacy practices, if you have questions,
        or if you would like to make a complaint, please contact us by e‑mail at
        hopanshgahlot@gmail.com
      </Paragraph>
    </Container>
  );
};

export default PrivacyPolicy;
