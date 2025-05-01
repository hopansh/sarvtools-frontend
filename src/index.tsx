import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

setTimeout(() => {
  const loader = document.getElementById('loader-container');
  if (loader) {
    loader.style.display = 'none';
  }
});
