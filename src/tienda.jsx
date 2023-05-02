//Jorge Lopez
import { DisplayOptions } from './index'
import './CSS/tienda.css'
export function Tienda({estado}){
    return(
        <div className="tienda" style={estado[2] ? DisplayOptions[0]: DisplayOptions[1]}>
            <h1>Soy la Tienda</h1>
        </div>
    )
}