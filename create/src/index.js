import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UseState from './UseState';
import UseEffect from './UseEffect';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <div>
      <App />
      <UseState />
      <UseEffect />
    </div>
  // </React.StrictMode>
);
