import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider}from 'react-router-dom';
import {router} from './routes';
import Appx from './Appx.jsx';
import '@radix-ui/themes/styles.css';

ReactDOM.createRoot(document.getElementById('root')).render( 
  <React.StrictMode>     
    <Appx />    
  </React.StrictMode>,
  
);
