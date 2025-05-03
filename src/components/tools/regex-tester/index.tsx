import React, { useState } from 'react';
import { Input, Button, Space, Alert, Typography } from 'antd';
import styled from '@emotion/styled';
import { useThemeMode } from '@/contexts/ThemeContext';

const { TextArea } = Input;
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

const RegexTester = () => {
  const [pattern, setPattern] = useState('');
  const [text, setText] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const { theme } = useThemeMode();

  const handleTest = () => {
    try {
      const re = new RegExp(pattern, 'g');
      const matches = text.match(re);
      setResult(matches ? `Matches: ${matches.join(', ')}` : 'No match');
    } catch {
      setResult('Invalid regex');
    }
  };

  return (
    <Styled theme={theme}>
      <div className="instructions">
        <Title level={3}>Regex Tester</Title>
        <Paragraph>
          Test regular expressions against your input text. Useful for developers, testers, and learners.
        </Paragraph>
        <Paragraph type="secondary">
          <b>Instructions:</b> Enter a regex pattern and some text, then click <b>Test</b>. Matches will be shown below.
        </Paragraph>
      </div>
      <Space direction="vertical" style={{ width: '100%' }} size="middle">
        <Input value={pattern} onChange={e => setPattern(e.target.value)} placeholder="Regex pattern..." />
        <TextArea rows={4} value={text} onChange={e => setText(e.target.value)} placeholder="Test text..." />
        <Button type="primary" block onClick={handleTest}>Test</Button>
        {result && <Alert message={result} type={result.startsWith('Matches') ? 'success' : 'error'} showIcon />}
      </Space>
    </Styled>
  );
};

export default RegexTester;
