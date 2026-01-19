import { createRoot } from 'react-dom/client';

import './scss/variables.scss';
import './index.scss';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { StrictMode } from 'react';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
