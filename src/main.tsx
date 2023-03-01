/* eslint-disable function-paren-newline */
/* eslint-disable comma-dangle */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Home } from './pages';

import { Footer } from './components/Footer';
import { Header } from './components/Header';

import { ThemeContextProvider } from './contexts/ThemeContext';

import './styles/global.css';
import { DeviceContextProvider } from './contexts/DeviceContex';

const router = createBrowserRouter([
  { path: '/', element: <Home /> }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <DeviceContextProvider>
        <Header />

        <RouterProvider router={router}/>

        <Footer />
      </DeviceContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);
