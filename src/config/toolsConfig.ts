export type ToolType = { id: string; name: string; description: string };

export const devTools = [
  {
    id: 'json-formatter',
    name: 'JSON Formatter',
    description: 'Format and validate JSON, HTML, CSS, and JavaScript code',
  },
  {
    id: 'base64-converter',
    name: 'Base64 Converter',
    description: 'Encode and decode Base64 strings',
  },
  {
    id: 'json-validator',
    name: 'JSON Validator',
    description: 'Validate and prettify JSON data with linting',
  },
  {
    id: 'regex-tester',
    name: 'Regex Tester',
    description: 'Test regular expressions with live matching',
  },
  {
    id: 'url-converter',
    name: 'URL Encoder/Decoder',
    description: 'Encode and decode URL components',
  },
  {
    id: 'hash-generator',
    name: 'Hash Generator',
    description: 'Generate MD5, SHA-1, SHA-256 hashes',
  },
  {
    id: 'jwt-decoder',
    name: 'JWT Decoder',
    description: 'Decode JSON Web Tokens and verify signature',
  },
  {
    id: 'lorem-ipsum',
    name: 'Lorem Ipsum Generator',
    description: 'Generate placeholder text in paragraphs',
  },
  {
    id: 'color-converter',
    name: 'Color Converter',
    description: 'Convert between HEX, RGB, HSL color formats',
  },
  {
    id: 'number-converter',
    name: 'Number Converter',
    description: 'Convert between decimal, binary, octal, and hexadecimal',
  },
];


export const generalTools = [
  {
    id: 'timestamp-converter',
    name: 'Timestamp Converter',
    description: 'Convert between epoch and human-readable dates',
  },
  {
    id: 'qr-code-generator',
    name: 'QR Code Generator',
    description: 'Generate QR codes from text or URLs',
  },
];

export const tools = [...devTools, ...generalTools];

export const toolsConfigMap = {
  dev: devTools,
  default: tools,
};
