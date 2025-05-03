import { useState } from 'react';
import { Card, Input, Button, Space, Typography } from 'antd';
import styled from '@emotion/styled';
import { useSiteConfig } from '@/contexts/SiteConfigContext';
import { useThemeMode } from '@/contexts/ThemeContext';

const { TextArea } = Input;
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
    .ant-typography {
      color: ${(props) => props.theme.colors.primary};
    }
    .ant-typography-secondary {
      color: ${(props) => props.theme.colors.subtext};
    }
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
  .ant-input, .ant-input-number, textarea {
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    border-radius: ${(props) => props.theme.borders.sRadius};
    border: 1px solid ${(props) => props.theme.colors.secondary};
    font-size: 1rem;
    margin-bottom: 8px;
    transition: border 0.2s;
    &:focus {
      border: 1.5px solid ${(props) => props.theme.colors.accent};
      box-shadow: 0 0 0 2px ${(props) => props.theme.colors.accent}22;
    }
  }
  .ant-btn-primary {
    background: linear-gradient(90deg, ${(props) => props.theme.colors.secondary} 60%, ${(props) => props.theme.colors.accent} 100%);
    border: none;
    color: #fff;
    font-weight: 600;
    letter-spacing: 0.5px;
    box-shadow: 0 2px 8px ${(props) => props.theme.colors.secondary}22;
    transition: background 0.2s, box-shadow 0.2s;
    &:hover {
      background: linear-gradient(90deg, ${(props) => props.theme.colors.accent} 0%, ${(props) => props.theme.colors.secondary} 100%);
      box-shadow: 0 4px 16px ${(props) => props.theme.colors.accent}22;
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

  return (
    <Styled theme={theme}>
      <div className="instructions">
        <Title level={3} style={{ fontWeight: 700, fontSize: 28, marginBottom: 0 }}>
          URL Encoder/Decoder
        </Title>
        <Paragraph style={{ fontSize: 16, margin: 0 }}>
          Encode or decode URL components for safe transmission in web addresses.<br />
          <span style={{ color: theme.colors.accent, fontWeight: 500 }}>Useful for developers and webmasters.</span>
        </Paragraph>
        <Paragraph type="secondary" style={{ fontSize: 14, marginTop: 8 }}>
          <b>Instructions:</b> Enter your text or encoded URL, then click <b>Encode</b> or <b>Decode</b> as needed. The result will appear below.
        </Paragraph>
      </div>
      <Input.TextArea
        rows={4}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter text or encoded URL..."
        style={{ resize: 'vertical', marginBottom: 0 }}
      />
      <div className="actions">
        <Button type="primary" onClick={handleEncode}>{config.buttons.encode}</Button>
        <Button type="primary" onClick={handleDecode}>{config.buttons.decode}</Button>
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
