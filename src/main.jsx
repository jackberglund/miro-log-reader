import React from 'react';
import ReactDOM from 'react-dom/client';
import '@mirohq/design-system-themes/base.css';
import '@mirohq/design-system-themes/light.css';
import './styles.css';
import { ThemeProvider, themes } from '@mirohq/design-system';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider themes={{ light: themes.light }} defaultTheme="light">
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
