//Dylan cardenas
import { DisplayOptions } from './index'
import './CSS/inicio.css'
export function Inicio({estado}){
    return(
        <div className="inicio" style={estado[1] ? DisplayOptions[0]: DisplayOptions[1]}>
            <h1>Soy el inicio</h1>
        </div>
    )
}