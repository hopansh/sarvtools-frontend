import { useState } from 'react';
import { Input, Button, Typography } from 'antd';
import styled from '@emotion/styled';
import { useSiteConfig } from '@/contexts/SiteConfigContext';
import { useThemeMode } from '@/contexts/ThemeContext';

const { Title, Paragraph } = Typography;

const Styled = styled.div<{ theme: any }>`
  max-width: 500px;
  margin: 0 auto;
  padding: 32px 20px;
  background: ${(props) => props.theme.colors.background2};
  border-radius: ${(props) => props.theme.borders.radius};
  box-shadow: ${(props) => props.theme.shadows.medium};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  @media (max-width: 600px) {
    padding: 16px 4px;
    gap: 12px;
  }
  .instructions {
    margin-bottom: 20px;
    text-align: center;
  }
  .actions {
    display: flex;
    gap: 12px;
    justify-content: center;
    width: 100%;
    @media (max-width: 600px) {
      flex-direction: column;
      gap: 8px;
    }
  }
`;

const UrlConverter = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const { theme } = useThemeMode();
  const config = useSiteConfig();

  const handleEncode = () => setOutput(encodeURIComponent(input));
  const handleDecode = () => {
    try {
      setOutput(decodeURIComponent(input));
    } catch {
      setOutput('Invalid encoded URL');
    }
  };

  // Sample value
  const handleSample = () => {
    setInput('https://example.com/?q=hello world&lang=en');
    setOutput('');
  };

  return (
    <Styled theme={theme}>
      <div className="instructions">
        <Title
          level={3}
          style={{ fontWeight: 700, fontSize: 28, marginBottom: 0 }}
        >
          URL Encoder/Decoder
        </Title>
        <Paragraph style={{ fontSize: 16, margin: 0 }}>
          Encode or decode URL components for safe transmission in web
          addresses.
        </Paragraph>
        <Paragraph type="secondary" style={{ fontSize: 14, marginTop: 8 }}>
          <b>Instructions:</b> Enter your text or encoded URL, then click{' '}
          <b>Encode</b> or <b>Decode</b> as needed. The result will appear
          below.
        </Paragraph>
      </div>
      <Button onClick={handleSample} block>
        Sample
      </Button>
      <Input.TextArea
        rows={4}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter text or encoded URL..."
        style={{ resize: 'vertical', marginBottom: 0 }}
      />
      <div className="actions">
        <Button type="primary" onClick={handleEncode}>
          {config.buttons.encode}
        </Button>
        <Button type="primary" onClick={handleDecode}>
          {config.buttons.decode}
        </Button>
      </div>
      <Input.TextArea
        rows={4}
        value={output}
        readOnly
        placeholder="Result will appear here"
        style={{ resize: 'vertical', marginBottom: 0 }}
      />
    </Styled>
  );
};

export default UrlConverter;
