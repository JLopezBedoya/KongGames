import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './login';
import { Inicio } from './inicio';
import { Tienda } from './tienda';
import { Carrito } from './carrito';
import { Bodega } from './bodega';
import { Biblioteca } from './biblioteca';
import { Usuarios } from './usuarios';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/tienda" element={<Tienda />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/bodega" element={<Bodega />} />
          <Route path="/biblioteca" element={<Biblioteca />} />
          <Route path="/usuarios" element={<Usuarios />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
     <App/>
  </Provider>
);
