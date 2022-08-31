import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UseState from './UseState';
import UseEffect from './UseEffect';
import Cleanup from './Cleanup';
import List from './List';
import Example01 from './Example01';

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
      <hr/>
      <List />
      <hr/> */}
      <Example01/>
      <hr/>
    </div>
  // </React.StrictMode>
);
