import React, { useState } from 'react';
import { Card, Input, Button, Space, Typography } from 'antd';
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

const JsonFormatter = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleFormat = () => {
    try {
      setOutput(JSON.stringify(JSON.parse(input), null, 2));
    } catch {
      setOutput('Invalid JSON');
    }
  };

  return (
    <Styled>
      <Card>
        <div className="instructions">
          <Title level={3}>JSON Formatter</Title>
          <Paragraph>
            Format and pretty-print your JSON data for better readability. Useful for debugging, sharing, and validating JSON structures.
          </Paragraph>
          <Paragraph type="secondary">
            <b>Instructions:</b> Paste your JSON in the input box and click <b>Format</b>. The formatted JSON will appear below. Invalid JSON will show an error.
          </Paragraph>
        </div>
        <Space direction="vertical" style={{ width: '100%' }} size="middle">
          <TextArea rows={8} value={input} onChange={e => setInput(e.target.value)} placeholder="Paste JSON here..." />
          <Button type="primary" block onClick={handleFormat}>Format</Button>
          <TextArea rows={8} value={output} readOnly placeholder="Formatted JSON will appear here" />
        </Space>
      </Card>
    </Styled>
  );
};

export default JsonFormatter;
