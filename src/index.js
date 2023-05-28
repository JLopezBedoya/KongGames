import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import { store } from './redux/store';
import {Login} from './login';
import {Inicio } from './inicio';
import { Tienda } from './tienda';
import { Carrito } from './carrito';
import { Bodega } from './bodega';
import { Biblioteca } from './biblioteca';
import { Usuarios } from './usuarios';

import 'bootstrap/dist/css/bootstrap.min.css';
function App(){
  return(
    <div>
      <Login />
      <Inicio/>
      <Tienda/>
      <Carrito/>
      <Bodega/>
      <Biblioteca/>
      <Usuarios/>
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
	    <App />
	</Provider>
  </React.StrictMode>
);


