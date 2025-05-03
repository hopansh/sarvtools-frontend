import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import styled from '@emotion/styled';
import Logo from '@/assets/feedback.png';
import { useSiteConfig } from '@/contexts/SiteConfigContext';
import { useThemeMode } from '@/contexts/ThemeContext';

const { TextArea } = Input;

const Styled = styled.div<{ theme: any }>`
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
    background: ${(props) => props.theme.colors.background2};
    border-radius: ${(props) => props.theme.borders.radius};
    box-shadow: ${(props) => props.theme.shadows.medium};
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
  const content = useSiteConfig();
  const { theme } = useThemeMode();

  const [loading, setLoading] = useState(false);

  const onFinish = async (values: any) => {
    setLoading(true);
    try {
      message.success(content.content.feedbackSuccessMessage);
    } catch (error) {
      message.error(content.content.feedbackErrorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Styled theme={theme} className="container">
      <div className="right-section">
        <div className="headline">{content.content.feedbackHeadline}</div>
        <Form layout="vertical" onFinish={onFinish} style={{ color: theme.colors.text }}>
          <Form.Item
            label={content.content.feedbackNameLabel}
            name="name"
            rules={[{ required: true, message: content.content.feedbackNameRequired }]}
          >
            <Input placeholder={content.content.feedbackNamePlaceholder} />
          </Form.Item>
          <Form.Item
            label={content.content.feedbackEmailLabel}
            name="email"
            rules={[
              {
                required: true,
                type: 'email',
                message: content.content.feedbackEmailRequired,
              },
            ]}
          >
            <Input placeholder={content.content.feedbackEmailPlaceholder} />
          </Form.Item>
          <Form.Item
            label={content.content.feedbackLabel}
            name="feedback"
            rules={[{ required: true, message: content.content.feedbackRequired }]}
          >
            <TextArea rows={4} placeholder={content.content.feedbackPlaceholder} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading}>
              {content.buttons.submit}
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
