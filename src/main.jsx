import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource-variable/jost';
import './styles/global.css';
import App from './App.jsx';
import { applyWorstCase } from './data/index.js';

async function boot() {
  if (import.meta.env.DEV && new URLSearchParams(window.location.search).get('data') === 'worst') {
    applyWorstCase((await import('./data/worst.js')).default);
  }
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}

boot();
