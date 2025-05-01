import React, { useState } from 'react';
import { Card, Input, Button, Space, Typography } from 'antd';
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

const QRCodeGenerator = () => {
  const [text, setText] = useState('');
  const [url, setUrl] = useState('');

  const handleGenerate = () => {
    setUrl(
      `https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=${encodeURIComponent(
        text,
      )}`,
    );
  };

  return (
    <Styled>
      <Card>
        <div className="instructions">
          <Title level={3}>QR Code Generator</Title>
          <Paragraph>
            Generate QR codes from any text or URL. Useful for sharing links, contact info, and more.
          </Paragraph>
          <Paragraph type="secondary">
            <b>Instructions:</b> Enter your text or URL and click <b>Generate</b>. The QR code image will appear below.
          </Paragraph>
        </div>
        <Space direction="vertical" style={{ width: '100%' }} size="middle">
          <Input value={text} onChange={e => setText(e.target.value)} placeholder="Enter text or URL..." />
          <Button type="primary" block onClick={handleGenerate}>Generate</Button>
          {url && <img src={url} alt="QR Code" style={{ marginTop: 12, maxWidth: '100%' }} />}
        </Space>
      </Card>
    </Styled>
  );
};

export default QRCodeGenerator;
