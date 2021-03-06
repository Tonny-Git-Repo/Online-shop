import React from 'react';
import ReactDOM from 'react-dom';
import './styling/index.scss';
import { App } from './App';

import { FilterProvider, ProductsProvider } from './contexts/index'

ReactDOM.render(
  <React.StrictMode>
    <ProductsProvider >
      <FilterProvider>
         <App />
      </FilterProvider>
    </ProductsProvider>
  </React.StrictMode>,
  document.getElementById('root')
); 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

