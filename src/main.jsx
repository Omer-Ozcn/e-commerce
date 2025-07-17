import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; 
import HomePage from './pages/HomePage.jsx';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
  </StrictMode>
);
