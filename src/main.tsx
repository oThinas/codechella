/* eslint-disable function-paren-newline */
/* eslint-disable comma-dangle */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Experience, Home, Info, SectorMap } from './pages';

import { Footer } from './components/Footer';
import { Header } from './components/Header';

import { DeviceContextProvider } from './contexts/DeviceContex';
import { ThemeContextProvider } from './contexts/ThemeContext';

import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeContextProvider>
        <DeviceContextProvider>
          <Header />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/experiencia' element={<Experience />} />
            <Route path='/mapa-de-setores' element={<SectorMap />} />
            <Route path='/informacoes' element={<Info />} />
          </Routes>

          <Footer />
        </DeviceContextProvider>
      </ThemeContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
