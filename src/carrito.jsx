//Miguel perez
import { DisplayOptions } from './index'
import './CSS/carrito.css'
export function Carrito({estado}){
    return(
        <div className="carrito" style={estado[4] ? DisplayOptions[0]: DisplayOptions[1]}>
            <h1>Soy el carrito</h1>
        </div>
    )
}