import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import TriviaApp from './TriviaApp.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TriviaApp />
  </StrictMode>
);
