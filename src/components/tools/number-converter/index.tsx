import React, { useState } from 'react';
import { Input, Select, Space, Typography } from 'antd';
import styled from '@emotion/styled';

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

const bases = [
  { label: 'Decimal', value: 10 },
  { label: 'Binary', value: 2 },
  { label: 'Octal', value: 8 },
  { label: 'Hexadecimal', value: 16 },
];

const NumberConverter = () => {
  const [input, setInput] = useState('');
  const [fromBase, setFromBase] = useState(10);
  const [toBase, setToBase] = useState(2);
  const [output, setOutput] = useState('');

  const handleConvert = () => {
    try {
      const num = parseInt(input, fromBase);
      setOutput(num.toString(toBase));
    } catch {
      setOutput('Invalid input');
    }
  };

  return (
    <Styled>
      <div className="instructions">
        <Title level={3}>Number Converter</Title>
        <Paragraph>
          Convert numbers between decimal, binary, octal, and hexadecimal formats. Useful for programmers, students, and engineers.
        </Paragraph>
        <Paragraph type="secondary">
          <b>Instructions:</b> Enter a number, select the source and target base, and view the result instantly.
        </Paragraph>
      </div>
      <Space direction="vertical" style={{ width: '100%' }} size="middle">
        <Input value={input} onChange={e => setInput(e.target.value)} placeholder="Enter number..." />
        <Space>
          <Select value={fromBase} onChange={setFromBase}>
            {bases.map(b => <Option key={b.value} value={b.value}>{b.label}</Option>)}
          </Select>
          <span>to</span>
          <Select value={toBase} onChange={setToBase}>
            {bases.map(b => <Option key={b.value} value={b.value}>{b.label}</Option>)}
          </Select>
        </Space>
        <Input value={output} readOnly placeholder="Result..." />
      </Space>
    </Styled>
  );
};

export default NumberConverter;
