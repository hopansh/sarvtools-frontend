import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import styled from '@emotion/styled';
import Logo from '@/assets/feedback.png';

const { TextArea } = Input;

const Styled = styled.div`
  text-align: left;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  .section {
    width: 50%;
    padding: 48px;
    text-align: center;
    @media (max-width: 768px) {
      width: 100%;
      padding: 24px;
    }
  }
  .right-section {
    .headline {
      text-align: left;
      font-size: 54px;
      font-weight: 700;
      @media (max-width: 768px) {
        font-size: 36px;
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
      <div className="left-section">
        <img src={Logo} alt="logo" className="logo-container" />
      </div>
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
    </Styled>
  );
};

export default FeedbackForm;
