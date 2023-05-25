import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './components/Home';
import Review from './components/Review';
import Detail from './components/Detail';
import Footer from './components/Footer';
import Header from './components/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
      <Route path='/Detail' element={<Detail/>}/>
      <Route path='/Review' element={<Review/>}/>
  
     
    
    </Routes>
  </BrowserRouter>
   
  </React.StrictMode>
);
