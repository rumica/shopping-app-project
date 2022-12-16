import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ProductProvider } from "./contexts/ProductContext";
import { BasketProvider } from './contexts/BasketContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ProductProvider>
   <BasketProvider>
   <React.StrictMode>
    <App />
  </React.StrictMode>
   </BasketProvider>
  </ProductProvider>
);

