import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UseState from './UseState';
import UseEffect from './UseEffect';
import Cleanup from './Cleanup';
import ToDo from './List';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <div>
      {/* <App />
      <hr/>
      <UseState />
      <hr/>
      <UseEffect />
      <hr/>
      <Cleanup />
      <hr/> */}
      <ToDo />
      <hr/>
    </div>
  // </React.StrictMode>
);
