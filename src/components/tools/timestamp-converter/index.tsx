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

const TimestampConverter = () => {
  const [epoch, setEpoch] = useState('');
  const [date, setDate] = useState('');

  const handleEpochToDate = () => {
    const ms = parseInt(epoch, 10);
    if (!isNaN(ms)) setDate(new Date(ms * 1000).toLocaleString());
    else setDate('Invalid epoch');
  };
  const handleDateToEpoch = () => {
    const d = new Date(date);
    if (!isNaN(d.getTime())) setEpoch(Math.floor(d.getTime() / 1000).toString());
    else setEpoch('Invalid date');
  };

  return (
    <Styled>
      <Card>
        <div className="instructions">
          <Title level={3}>Timestamp Converter</Title>
          <Paragraph>
            Convert between Unix epoch timestamps and human-readable date/time. Useful for developers, analysts, and anyone working with time data.
          </Paragraph>
          <Paragraph type="secondary">
            <b>Instructions:</b> Enter an epoch value and convert to date, or enter a date and convert to epoch seconds.
          </Paragraph>
        </div>
        <Space direction="vertical" style={{ width: '100%' }} size="middle">
          <Input value={epoch} onChange={e => setEpoch(e.target.value)} placeholder="Epoch seconds..." />
          <Button block onClick={handleEpochToDate}>Epoch → Date</Button>
          <Input value={date} onChange={e => setDate(e.target.value)} placeholder="YYYY-MM-DD HH:mm:ss..." />
          <Button block onClick={handleDateToEpoch}>Date → Epoch</Button>
        </Space>
      </Card>
    </Styled>
  );
};

export default TimestampConverter;
