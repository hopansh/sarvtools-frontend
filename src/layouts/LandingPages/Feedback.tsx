import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import styled from '@emotion/styled';
import Logo from '@/assets/feedback.png';
import { theme } from '@/styles';

const { TextArea } = Input;

const Styled = styled.div`
  text-align: left;
  flex-direction: row;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  .section {
    width: 50%;
    text-align: center;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
  .right-section {
    background: ${theme.colors.background2};
    border-radius: ${theme.borders.radius};
    box-shadow: ${theme.shadows.medium};
    padding: 24px;
    @media (max-width: 768px) {
      padding: 16px 24px;
    }
    .headline {
      text-align: left;
      font-size: 54px;
      font-weight: 700;
      @media (max-width: 768px) {
        font-size: 32px;
        padding-bottom: 16px;
      }
    }
    .sub-headline {
      text-align: left;
      font-size: 24px;
      font-weight: 400;
      @media (max-width: 768px) {
        font-size: 18px;
      }
    }
  }
  .left-section {
    text-align: center;
    width: 50%;
    padding: 0 10vw;
    @media (max-width: 768px) {
      width: 100%;
      padding: 0 7vw;
    }
  }
`;

const FeedbackForm: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: any) => {
    setLoading(true);
    try {
      message.success('Thank you for your feedback!');
    } catch (error) {
      message.error(
        'There was an error submitting your feedback. Please try again.',
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Styled className="container">
      <div className="right-section">
        <div className="headline">Feedback Form</div>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please enter your name' }]}
          >
            <Input placeholder="Your Name" />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                type: 'email',
                message: 'Please enter a valid email',
              },
            ]}
          >
            <Input placeholder="Your Email" />
          </Form.Item>
          <Form.Item
            label="Feedback"
            name="feedback"
            rules={[{ required: true, message: 'Please enter your feedback' }]}
          >
            <TextArea rows={4} placeholder="Your Feedback" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className="left-section">
        <img src={Logo} alt="logo" className="logo-container" />
      </div>
    </Styled>
  );
};

export default FeedbackForm;
