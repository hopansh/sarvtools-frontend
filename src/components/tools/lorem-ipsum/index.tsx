import React, { useState } from 'react';
import { InputNumber, Button, Space, Typography } from 'antd';
import styled from '@emotion/styled';
import { useThemeMode } from '@/contexts/ThemeContext';

const { Title, Paragraph } = Typography;

const Styled = styled.div<{ theme: any }>`
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

const LOREM = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut laoreet dictum, massa sapien gravida urna, nec dictum velit enim at urna. Etiam euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam nisl nunc euismod nunc.`;

const LoremIpsum = () => {
  const [count, setCount] = useState(1);
  const [output, setOutput] = useState('');
  const { theme } = useThemeMode();

  const handleGenerate = () => {
    setOutput(Array(count).fill(LOREM).join('\n\n'));
  };

  // Sample value
  const handleSample = () => {
    setCount(2);
    setOutput('');
  };

  return (
    <Styled theme={theme}>
      <div className="instructions">
        <Title level={3}>Lorem Ipsum Generator</Title>
        <Paragraph>
          Generate placeholder text for your designs, documents, or websites. Useful for designers, developers, and writers.
        </Paragraph>
        <Paragraph type="secondary">
          <b>Instructions:</b> Select the number of paragraphs and click <b>Generate</b>. The generated text will appear below.
        </Paragraph>
      </div>
      <Space direction="vertical" style={{ width: '100%' }} size="middle">
        <Button onClick={handleSample} block>Sample</Button>
        <InputNumber min={1} max={10} value={count} onChange={v => setCount(Number(v))} />
        <Button type="primary" block onClick={handleGenerate}>Generate</Button>
        <textarea rows={6} value={output} readOnly style={{ width: '100%' }} placeholder="Generated lorem ipsum will appear here" />
      </Space>
    </Styled>
  );
};

export default LoremIpsum;
