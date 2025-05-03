import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { LanguageProvider } from './contexts/LanguageContext';
import { SiteConfigProvider } from './contexts/SiteConfigContext';
import ErrorBoundary from 'antd/es/alert/ErrorBoundary';
import { ThemeProvider } from '@/contexts/ThemeContext';

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <ThemeProvider>
        <LanguageProvider>
          <SiteConfigProvider>
            <App />
          </SiteConfigProvider>
        </LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root'),
);

setTimeout(() => {
  const loader = document.getElementById('loader-container');
  if (loader) {
    loader.style.display = 'none';
  }
});
