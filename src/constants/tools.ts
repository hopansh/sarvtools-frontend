
export type ToolType = {
  id: string;
  name: string;
  description: string;
  icon: string;
};

export type CategoryType = {
  id: string;
  name: string;
  description: string;
  tools: ToolType[]}[];


export const categories: CategoryType = [{
    id: "developer",
    name: "Developer Tools",
    description: "Tools for developers to enhance productivity and code quality.",
    tools: [
      {
        id: 'json-formatter',
        name: 'JSON Formatter',
        description: 'Format and validate JSON, HTML, CSS, and JavaScript code',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm2 4v2h10V7H7zm0 4v2h10v-2H7zm0 4v2h7v-2H7z"/></svg>',
      },
      {
        id: 'base64-converter',
        name: 'Base64 Converter',
        description: 'Encode and decode Base64 strings',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1 15H9v-2h2v2zm0-4H9V7h2v6z"/></svg>',
      },
      {
        id: 'json-validator',
        name: 'JSON Validator',
        description: 'Validate and prettify JSON data with linting',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>',
      },
      {
        id: 'regex-tester',
        name: 'Regex Tester',
        description: 'Test regular expressions with live matching',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16 16v4l8-8-8-8v4H4v8h12z"/></svg>',
      },
      {
        id: 'url-converter',
        name: 'URL Encoder/Decoder',
        description: 'Encode and decode URL components',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/></svg>',
      },
      {
        id: 'hash-generator',
        name: 'Hash Generator',
        description: 'Generate MD5, SHA-1, SHA-256 hashes',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2zm8 14H6c-.55 0-1-.45-1-1v-5h5v1.5h2V13h5v5c0 .55-.45 1-1 1h-5v-1.5h-2V19z"/></svg>',
      },
      {
        id: 'jwt-decoder',
        name: 'JWT Decoder',
        description: 'Decode JSON Web Tokens and verify signature',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg>',
      },
      {
        id: 'lorem-ipsum',
        name: 'Lorem Ipsum Generator',
        description: 'Generate placeholder text in paragraphs',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18 20H6v-2H4v2c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-2h-2v2zM6 4h12v2h2V4c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v2h2V4zm6 5h1v4h-1v1h-1v-1H9v-1h3V9zm0-3h-1v1h1V6zm0 8h1v1h-1v-1z"/></svg>',
      },
      {
        id: 'color-converter',
        name: 'Color Converter',
        description: 'Convert between HEX, RGB, HSL color formats',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>',
      },
      {
        id: 'timestamp-converter',
        name: 'Timestamp Converter',
        description: 'Convert between epoch and human-readable dates',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>',
      },
    ],
  }];