import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ProductProvider from './contexts/ProductContext';
import SidebarProvider from './contexts/SidebarContext';
import CartProvider from './contexts/CartContext';
import CategoryProvider from './contexts/CategoryContext';
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <SidebarProvider>
    <CartProvider>
      <CategoryProvider>
      <ProductProvider>
  <BrowserRouter>
    <App />
    </BrowserRouter>
    </ProductProvider>  
      </CategoryProvider>
    </CartProvider>
  </SidebarProvider>
  </React.StrictMode>
);
