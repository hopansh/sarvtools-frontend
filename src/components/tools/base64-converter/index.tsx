import { Button, Card, Radio } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";

export default function Base64Converter() {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
    const [mode, setMode] = useState<'encode' | 'decode'>('encode');
  
    const handleConvert = () => {
      setOutput(
        mode === 'encode' 
          ? btoa(input) 
          : atob(input)
      );
    };
  
    return (
      <Card title="Base64 Converter">
        <Radio.Group value={mode} onChange={(e) => setMode(e.target.value)}>
          <Radio value="encode">Encode</Radio>
          <Radio value="decode">Decode</Radio>
        </Radio.Group>
  
        <TextArea
          rows={6}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={mode === 'encode' ? 'Text to encode' : 'Base64 to decode'}
        />
        <Button onClick={handleConvert}>
          {mode === 'encode' ? 'Encode' : 'Decode'}
        </Button>
        <TextArea
          rows={6}
          value={output}
          readOnly
        />
      </Card>
    );
  }