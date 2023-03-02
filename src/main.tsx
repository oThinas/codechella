/* eslint-disable function-paren-newline */
/* eslint-disable comma-dangle */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from './pages';

import { Footer } from './components/Footer';
import { Header } from './components/Header';

import { ThemeContextProvider } from './contexts/ThemeContext';

import './styles/global.css';
import { DeviceContextProvider } from './contexts/DeviceContex';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeContextProvider>
        <DeviceContextProvider>
          <Header />

          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>

          <Footer />
        </DeviceContextProvider>
      </ThemeContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
