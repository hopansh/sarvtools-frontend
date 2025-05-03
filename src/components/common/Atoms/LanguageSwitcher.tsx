import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Select } from 'antd';

const languages = [
  { code: 'en', label: 'English' },
  { code: 'hi', label: 'हिन्दी' },
];

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <Select
      aria-label="Select language"
      value={language}
      onChange={value => setLanguage(value as 'en' | 'hi')}
    >
      {languages.map(lang => (
        <option key={lang.code} value={lang.code}>
          {lang.label}
        </option>
      ))}
    </Select>
  );
};

export default LanguageSwitcher;
