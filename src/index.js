import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import './index.css';
import App from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from 'styles/globalStyles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <BrowserRouter basename="/test_task">
      <App />
    </BrowserRouter>
  </ThemeProvider>
);
