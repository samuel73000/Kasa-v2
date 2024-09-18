import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/Style/index.css';
import Home from "../src/Page/Home"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);

