import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { GlobalStyles } from "./styles/global";

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <GlobalStyles />
  </StrictMode>
);