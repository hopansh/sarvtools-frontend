import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigProvider, theme } from 'antd';
import { theme as localTheme } from '@/styles';
import store from '@/store/store';
import ErrorBoundary from './ErrorBoundary';

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const antdTheme = {
    token: {
      colorPrimary: localTheme.colors.secondary,
      colorInfo: localTheme.colors.primary,
      fontFamily: localTheme.fonts.primary,
      fontWeight: localTheme.fontWeights.thick,
    },
    algorithm: theme.defaultAlgorithm,
  };
  return (
    <Router>
      <Provider store={store}>
        <ConfigProvider theme={antdTheme}>
          <ErrorBoundary>{children}</ErrorBoundary>
        </ConfigProvider>
      </Provider>
    </Router>
  );
};

export default Wrapper;
