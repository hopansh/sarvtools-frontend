import { useState } from 'react';
import { Input, Button, Space, Typography } from 'antd';
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
  .input-row {
    display: flex;
    gap: 8px;
    margin-bottom: 12px;
    @media (max-width: 600px) {
      flex-direction: column;
      gap: 4px;
    }
  }
`;

function hexToRgb(hex: string) {
  let c = hex.replace('#', '');
  if (c.length === 3) c = c[0]+c[0]+c[1]+c[1]+c[2]+c[2];
  if (c.length !== 6) return '';
  const n = parseInt(c, 16);
  return `rgb(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255})`;
}

function rgbToHex(rgb: string) {
  const match = rgb.match(/rgb\s*\((\d+),\s*(\d+),\s*(\d+)\)/i);
  if (!match) return '';
  return (
    '#' +
    ((1 << 24) + (parseInt(match[1]) << 16) + (parseInt(match[2]) << 8) + parseInt(match[3]))
      .toString(16)
      .slice(1)
  );
}

const ColorConverter = () => {
  const [hex, setHex] = useState('');
  const [rgb, setRgb] = useState('');
  const { theme } = useThemeMode();

  const handleHexToRgb = () => setRgb(hexToRgb(hex));
  const handleRgbToHex = () => setHex(rgbToHex(rgb));

  // Sample values
  const handleSample = () => {
    setHex('#ff0000');
    setRgb('rgb(255,0,0)');
  };

  return (
    <Styled theme={theme}>
      <div className="instructions">
        <Title level={3}>Color Converter</Title>
        <Paragraph>
          Convert between <b>HEX</b> and <b>RGB</b> color formats. Useful for designers and developers working with color codes.
        </Paragraph>
        <Paragraph type="secondary">
          <b>Instructions:</b> Enter a HEX color (e.g. <code>#ff0000</code>) and click <b>HEX → RGB</b> to get the RGB value, or enter an RGB value (e.g. <code>rgb(255,0,0)</code>) and click <b>RGB → HEX</b>.
        </Paragraph>
      </div>
      <Space direction="vertical" style={{ width: '100%' }} size="middle">
        <Button onClick={handleSample} block>Sample</Button>
        <div className="input-row">
          <Input
            placeholder="#RRGGBB"
            value={hex}
            onChange={e => setHex(e.target.value)}
          />
          <Button type="primary" onClick={handleHexToRgb} block>HEX → RGB</Button>
        </div>
        <div className="input-row">
          <Input
            placeholder="rgb(255,255,255)"
            value={rgb}
            onChange={e => setRgb(e.target.value)}
          />
          <Button type="primary" onClick={handleRgbToHex} block>RGB → HEX</Button>
        </div>
      </Space>
    </Styled>
  );
};

export default ColorConverter;
