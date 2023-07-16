import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ContexttCART from './context/ContexttCART';
import Reducer from './function/Reducer';
import PositiveItems from './context/PositiveItems';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
     <PositiveItems>
      <Reducer>
          <ContexttCART>
              <App />
          </ContexttCART>
      </Reducer>
     </PositiveItems>
  </BrowserRouter>
);
