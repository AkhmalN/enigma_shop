import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './layouts/navbar';
import Home from './pages/home'
import Landing from './pages/landing';
import Shop from './pages/shop';
import Contact from './pages/contact';
import Detail from './pages/detail';
import { SkeletonTheme } from 'react-loading-skeleton';
import Cart from './pages/cart';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <SkeletonTheme baseColor="#9BABB8" highlightColor="#D7C0AE" width='200px' height= '15px' >
      <BrowserRouter>
         <Navbar />
         <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/home' element={<Home />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/shop/products/:id' element={<Detail />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/cart' element={<Cart />} />
         </Routes>
      </BrowserRouter>
   </SkeletonTheme>
);

