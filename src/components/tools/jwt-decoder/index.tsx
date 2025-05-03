import React, { useState } from 'react';
import { Input, Button, Space, Typography } from 'antd';
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

function decodeJwt(token: string) {
  try {
    const payload = token.split('.')[1];
    if (!payload) return 'Invalid JWT';
    return JSON.stringify(JSON.parse(atob(payload)), null, 2);
  } catch {
    return 'Invalid JWT';
  }
}

const JwtDecoder = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleDecode = () => setOutput(decodeJwt(input));

  // Sample value
  const handleSample = () => {
    setInput('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiam9obmRvZSIsImlhdCI6MTY4MzAwMDAwMH0.signature');
    setOutput('');
  };

  return (
    <Styled>
      <div className="instructions">
        <Title level={3}>JWT Decoder</Title>
        <Paragraph>
          Decode the payload of a JSON Web Token (JWT) to view its contents. Useful for debugging authentication tokens and inspecting claims.
        </Paragraph>
        <Paragraph type="secondary">
          <b>Instructions:</b> Paste your JWT string and click <b>Decode</b>. The decoded payload will appear below. This tool does not verify signatures.
        </Paragraph>
      </div>
      <Space direction="vertical" style={{ width: '100%' }} size="middle">
        <Button onClick={handleSample} block>Sample</Button>
        <TextArea rows={4} value={input} onChange={e => setInput(e.target.value)} placeholder="Paste JWT here..." />
        <Button type="primary" block onClick={handleDecode}>Decode</Button>
        <TextArea rows={8} value={output} readOnly placeholder="Decoded JWT payload will appear here" />
      </Space>
    </Styled>
  );
};

export default JwtDecoder;
