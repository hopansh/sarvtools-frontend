import React, { useState } from 'react';
import { Card, Input, Button, Space, Alert, Typography } from 'antd';
import styled from '@emotion/styled';

const { TextArea } = Input;
const { Title, Paragraph } = Typography;

const Styled = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 24px 12px;
  @media (max-width: 600px) {
    padding: 12px 2px;
  }
  .instructions {
    margin-bottom: 16px;
  }
`;

const JsonValidator = () => {
  const [input, setInput] = useState('');
  const [valid, setValid] = useState<boolean | null>(null);

  const handleValidate = () => {
    try {
      JSON.parse(input);
      setValid(true);
    } catch {
      setValid(false);
    }
  };

  return (
    <Styled>
      <Card>
        <div className="instructions">
          <Title level={3}>JSON Validator</Title>
          <Paragraph>
            Quickly check if your JSON is valid. Useful for debugging APIs, configuration files, and more.
          </Paragraph>
          <Paragraph type="secondary">
            <b>Instructions:</b> Paste your JSON in the input box and click <b>Validate</b>. You will see a success or error message below.
          </Paragraph>
        </div>
        <Space direction="vertical" style={{ width: '100%' }} size="middle">
          <TextArea rows={8} value={input} onChange={e => setInput(e.target.value)} placeholder="Paste JSON here..." />
          <Button type="primary" block onClick={handleValidate}>Validate</Button>
          {valid === true && <Alert message="Valid JSON" type="success" showIcon />}
          {valid === false && <Alert message="Invalid JSON" type="error" showIcon />}
        </Space>
      </Card>
    </Styled>
  );
};

export default JsonValidator;
