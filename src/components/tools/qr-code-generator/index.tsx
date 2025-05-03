import React, { useState, useRef } from 'react';
import { Button, Input, QRCode, Space, Typography } from 'antd';
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

const QRCodeGenerator = () => {
  const [text, setText] = useState('');
  const qrRef = useRef<HTMLDivElement>(null);
  const { theme } = useThemeMode();

  const handleDownload = () => {
    if (!qrRef.current) return;
    const canvas = qrRef.current.querySelector('canvas');
    if (!canvas) return;
    const url = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = url;
    link.download = 'qr-code.png';
    link.click();
  };

  return (
    <Styled theme={theme}>
      <div className="instructions">
        <Title level={3}>QR Code Generator</Title>
        <Paragraph>
          Generate QR codes from any text or URL. Useful for sharing links, contact info, and more.
        </Paragraph>
        <Paragraph type="secondary">
          <b>Instructions:</b> Enter your text or URL and the QR code image will update below.
        </Paragraph>
      </div>
      <Space direction="vertical" style={{ width: '100%' }} size="middle" align="center">
        {text ? (
          <div ref={qrRef}>
            <QRCode value={text} />
          </div>
        ) : (
          <div style={{
            width: 160,
            height: 160,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px dashed #d9d9d9',
            borderRadius: 8,
            background: '#fafafa',
            color: '#bfbfbf',
            fontSize: 16,
            marginBottom: 8
          }}>
            QR Preview
          </div>
        )}
        {text && (
          <Button onClick={handleDownload} style={{ marginBottom: 8 }}>
            Download QR Code
          </Button>
        )}
        <Input
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Enter text or URL..."
          maxLength={60}
        />
      </Space>
    </Styled>
  );
};

export default QRCodeGenerator;
