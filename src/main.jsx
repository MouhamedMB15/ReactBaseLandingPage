
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ThemeProvider } from './common/ThemeContext.jsx';

const initialTheme = localStorage.getItem('theme') || 'dark';
document.body.setAttribute('data-theme', initialTheme);

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);
