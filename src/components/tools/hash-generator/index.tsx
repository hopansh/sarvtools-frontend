import React, { useState } from 'react';
import { Input, Button, Select, Space, Typography } from 'antd';
import styled from '@emotion/styled';

const { TextArea } = Input;
const { Option } = Select;
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

async function sha256(str: string) {
  const buf = await window.crypto.subtle.digest('SHA-256', new TextEncoder().encode(str));
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
}

function md5(str: string) {
  // Placeholder: In production, use a library like spark-md5
  return 'MD5 not implemented in browser natively.';
}

const HashGenerator = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [algo, setAlgo] = useState('sha256');

  const handleHash = async () => {
    if (algo === 'sha256') setOutput(await sha256(input));
    else if (algo === 'md5') setOutput(md5(input));
    else setOutput('Not implemented');
  };

  // Sample value
  const handleSample = () => {
    setInput('hello world');
    setOutput('');
  };

  return (
    <Styled>
      <div className="instructions">
        <Title level={3}>Hash Generator</Title>
        <Paragraph>
          Generate cryptographic hashes (SHA-256, MD5) for any input text. Useful for verifying file integrity, storing passwords, and more.
        </Paragraph>
        <Paragraph type="secondary">
          <b>Instructions:</b> Select the hash algorithm, enter your text, and click <b>Generate</b>. <b>Note:</b> MD5 is not implemented in-browser and is shown as a placeholder.
        </Paragraph>
      </div>
      <Space direction="vertical" style={{ width: '100%' }} size="middle">
        <Button onClick={handleSample} block>Sample</Button>
        <Select value={algo} onChange={setAlgo} style={{ width: 120 }}>
          <Option value="sha256">SHA-256</Option>
          <Option value="md5">MD5</Option>
        </Select>
        <TextArea rows={4} value={input} onChange={e => setInput(e.target.value)} placeholder="Enter text..." />
        <Button type="primary" block onClick={handleHash}>Generate</Button>
        <TextArea rows={2} value={output} readOnly placeholder="Hash output will appear here" />
      </Space>
    </Styled>
  );
};

export default HashGenerator;
