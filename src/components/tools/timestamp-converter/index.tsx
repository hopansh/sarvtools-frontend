import React, { useState } from 'react';
import { Card, Input, Button, Space, Typography } from 'antd';
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

const TimestampConverter = () => {
  const [epoch, setEpoch] = useState('');
  const [date, setDate] = useState('');
  const { theme } = useThemeMode();

  const handleEpochToDate = () => {
    const ms = parseInt(epoch, 10);
    if (!isNaN(ms)) setDate(new Date(ms * 1000).toLocaleString());
    else setDate('Invalid epoch');
  };
  const handleDateToEpoch = () => {
    const d = new Date(date);
    if (!isNaN(d.getTime()))
      setEpoch(Math.floor(d.getTime() / 1000).toString());
    else setEpoch('Invalid date');
  };

  // Sample values
  const handleSample = () => {
    setEpoch('1714694400'); // 2024-05-03 00:00:00 UTC
    setDate('2024-05-03 00:00:00');
  };

  return (
    <Styled theme={theme}>
      <Card
        style={{ background: theme.colors.white, color: theme.colors.text }}
      >
        <div className="instructions">
          <Title level={3}>Timestamp Converter</Title>
          <Paragraph>
            Convert between Unix epoch timestamps and human-readable date/time.
            Useful for developers, analysts, and anyone working with time data.
          </Paragraph>
          <Paragraph type="secondary">
            <b>Instructions:</b> Enter an epoch value and convert to date, or
            enter a date and convert to epoch seconds.
          </Paragraph>
        </div>
        <Space direction="vertical" style={{ width: '100%' }} size="middle">
          <Button onClick={handleSample} block>Sample</Button>
          <Input
            value={epoch}
            onChange={(e) => setEpoch(e.target.value)}
            placeholder="Epoch seconds..."
          />
          <Button type="primary" block onClick={handleEpochToDate}>
            Epoch → Date
          </Button>
          <Input
            value={date}
            onChange={(e) => setDate(e.target.value)}
            placeholder="YYYY-MM-DD HH:mm:ss..."
          />
          <Button type="primary" block onClick={handleDateToEpoch}>
            Date → Epoch
          </Button>
        </Space>
      </Card>
    </Styled>
  );
};

export default TimestampConverter;
