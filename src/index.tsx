import React from 'react';
import ReactDOM from 'react-dom';
import './styling/index.scss';
import { App } from './App';

import { ProductsProvider } from './contexts/index'

ReactDOM.render(
  <React.StrictMode>
    <ProductsProvider openSideBar={function (): void {
      throw new Error('Function not implemented.');
    } } closeSideBar={function (): void {
      throw new Error('Function not implemented.');
    } } isSideBarOpen={false} products_loading={false} products={[]} featured_products={[]}>
       <App />
    </ProductsProvider>
  </React.StrictMode>,
  document.getElementById('root')
); 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

