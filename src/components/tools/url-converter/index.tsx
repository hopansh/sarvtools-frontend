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

const UrlConverter = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleEncode = () => setOutput(encodeURIComponent(input));
  const handleDecode = () => {
    try {
      setOutput(decodeURIComponent(input));
    } catch {
      setOutput('Invalid encoded URL');
    }
  };

  return (
    <Styled>
      <Card>
        <div className="instructions">
          <Title level={3}>URL Encoder/Decoder</Title>
          <Paragraph>
            Encode or decode URL components for safe transmission in web addresses. Useful for developers and webmasters.
          </Paragraph>
          <Paragraph type="secondary">
            <b>Instructions:</b> Enter your text or encoded URL, then click <b>Encode</b> or <b>Decode</b> as needed. The result will appear below.
          </Paragraph>
        </div>
        <Space direction="vertical" style={{ width: '100%' }} size="middle">
          <TextArea rows={4} value={input} onChange={e => setInput(e.target.value)} placeholder="Enter text or encoded URL..." />
          <Space>
            <Button onClick={handleEncode}>Encode</Button>
            <Button onClick={handleDecode}>Decode</Button>
          </Space>
          <TextArea rows={4} value={output} readOnly placeholder="Result will appear here" />
        </Space>
      </Card>
    </Styled>
  );
};

export default UrlConverter;
