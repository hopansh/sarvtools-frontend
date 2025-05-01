// CodeFormatter/ToolComponent.tsx
import { Card, Select, Button, Space, Input, Typography } from 'antd';
import { useState } from 'react';
import prettier from 'prettier/standalone';
import parserJson from 'prettier/plugins/babel';
import parserHtml from 'prettier/plugins/html';
import { css as beautifyCss } from 'js-beautify';
import styled from '@emotion/styled';

const { TextArea } = Input;
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

export default function CodeFormatter() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [language, setLanguage] = useState('json');

  const handleFormat = async () => {
    setOutput(await formatCode(input, language));
  };

  async function formatCode(input: string, language: string): Promise<string> {
    if (!input.trim()) return '';
    try {
      if (language === 'json') {
        return await prettier.format(input, {
          parser: 'json',
          plugins: [parserJson],
        });
      } else if (language === 'html') {
        return await prettier.format(input, {
          parser: 'html',
          plugins: [parserHtml],
        });
      } else if (language === 'css') {
        return beautifyCss(input, { indent_size: 2 });
      }
      return input;
    } catch (e) {
      return 'Invalid input or format.';
    }
  }

  return (
    <Styled>
      <Card>
        <div className="instructions">
          <Title level={3}>Text/Code Formatter</Title>
          <Paragraph>
            Format and beautify your JSON, HTML, or CSS code for better readability. Useful for developers and students.
          </Paragraph>
          <Paragraph type="secondary">
            <b>Instructions:</b> Select the code type, paste your code, and click <b>Format</b>. The formatted code will appear below.
          </Paragraph>
        </div>
        <Space direction="vertical" style={{ width: '100%' }} size="middle">
          <Select
            defaultValue="json"
            style={{ width: 120 }}
            onChange={setLanguage}
          >
            <Option value="json">JSON</Option>
            <Option value="html">HTML</Option>
            <Option value="css">CSS</Option>
          </Select>
          <TextArea
            rows={10}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`Paste ${language} code...`}
          />
          <Button type="primary" block onClick={handleFormat}>
            Format
          </Button>
          <TextArea
            rows={10}
            value={output}
            readOnly
            placeholder="Formatted code will appear here"
          />
        </Space>
      </Card>
    </Styled>
  );
}