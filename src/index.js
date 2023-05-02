import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import {Login} from './login';
import {Inicio } from './inicio';
import { Tienda } from './tienda';
import { Carrito } from './carrito';
import { Bodega } from './bodega';
export const DisplayOptions = [{display: "block"}, {display: "none"}];
function App(){
  const [estado, setEstado] = useState([true, false, false, false, false])
  return(
    <div>
      <div>
      <button onClick={()=>setEstado([false, true, false, false, false])}>Inicio</button>
      <button onClick={()=>setEstado([false, false, true, false, false])}>Tienda</button>
      <button onClick={()=>setEstado([false, false, false, false, true])}>Carrito</button>
      <button onClick={()=>setEstado([false, false, false, true, false])}>Bodega</button>
      <button onClick={()=>setEstado([true, false, false, false, false])}>Login</button>
      </div>
      <Login estado={estado} />
      <Inicio estado={estado} />
      <Tienda estado={estado} />
      <Carrito estado={estado} />
      <Bodega estado={estado} />
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


