import { Button, Card, Radio, Typography, Space } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";
import styled from '@emotion/styled';

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

export default function Base64Converter() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [mode, setMode] = useState<'encode' | 'decode'>('encode');

  const handleConvert = () => {
    try {
      setOutput(
        mode === 'encode'
          ? btoa(input)
          : atob(input)
      );
    } catch {
      setOutput('Invalid input for this mode.');
    }
  };

  return (
    <Styled>
      <div className="instructions">
        <Title level={3}>Base64 Converter</Title>
        <Paragraph>
          Convert text to and from <b>Base64</b> encoding. Useful for encoding data for transmission or decoding Base64-encoded strings.
        </Paragraph>
        <Paragraph type="secondary">
          <b>Instructions:</b> Select <b>Encode</b> to convert plain text to Base64, or <b>Decode</b> to convert Base64 back to plain text. Paste your input and click the button.
        </Paragraph>
      </div>
      <Space direction="vertical" style={{ width: '100%' }} size="middle">
        <Radio.Group value={mode} onChange={(e) => setMode(e.target.value)}>
          <Radio value="encode">Encode</Radio>
          <Radio value="decode">Decode</Radio>
        </Radio.Group>
        <TextArea
          rows={5}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={mode === 'encode' ? 'Text to encode' : 'Base64 to decode'}
        />
        <Button type="primary" block onClick={handleConvert}>
          {mode === 'encode' ? 'Encode' : 'Decode'}
        </Button>
        <TextArea
          rows={5}
          value={output}
          readOnly
          placeholder="Result will appear here"
        />
      </Space>
    </Styled>
  );
}