import React from 'react';
import ReactDOM from 'react-dom/client';
import { Login } from './login'
function App(){
  return(
    <div>
      <h1>Tienda KongGames</h1>
      <h2>Scrum master: Jorge Lopez</h2>
      <h2>Desarrolladores:</h2>
      <h2>-Miguel Perez</h2>
      <h2>-Dylan Cardenas</h2>
      <h2>-Carlos Quintero</h2>
      <h2>-kenner rocha</h2>
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


