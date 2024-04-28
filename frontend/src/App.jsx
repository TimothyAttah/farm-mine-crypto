import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import AboutUs from './pages/aboutUs/AboutUs';

import Layout from './components/Layout';
import Hero from './pages/home/modules/Hero';

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about_us' element={<AboutUs />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;
