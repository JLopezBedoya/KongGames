import { configureStore } from '@reduxjs/toolkit';
import userReducer from './usuarioSlice';
import carritoReducer from './carritoslice';
import mostrarslice from './mostrarslice';
export const store = configureStore({
    reducer:{
        logeado: userReducer,
        carrito: carritoReducer,
        mostrando: mostrarslice
    }
})