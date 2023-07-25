import React from 'react';
import ReactDOM from 'react-dom/client';
//style
import './index.css';
//router
import { BrowserRouter } from 'react-router-dom';
//context
import ContexttCART from './context/ContexttCART';
import DataCoinApi from './context/DataCoinApi';
import Reducer from './context/Reducer';
import DataSlicer from './context/DataSlicer';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <BrowserRouter>
      <DataCoinApi>
          <Reducer>
              <ContexttCART>
                 <DataSlicer>
                     <App />
                 </DataSlicer>
              </ContexttCART>
          </Reducer>
      </DataCoinApi>
  </BrowserRouter>
);
