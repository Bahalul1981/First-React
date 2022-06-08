import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Products from "./component/Products"
import App from "./App"
import Header from './component/Header';
import Footer from './component/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    
    < Products/>
    <div>< Header/></div>
    
    <div>< Footer/></div>

    <div>< App/></div>
    
  </>
);


reportWebVitals();
