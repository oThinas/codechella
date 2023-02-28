/* eslint-disable function-paren-newline */
/* eslint-disable comma-dangle */
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { App } from './App';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { ThemeContextProvider } from './contexts/ThemeContext';

import './styles/global.css';

const router = createBrowserRouter([
  { path: '/', element: <App /> }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <Header />

      <RouterProvider router={router}/>

      <Footer />
    </ThemeContextProvider>
  </React.StrictMode>
);
