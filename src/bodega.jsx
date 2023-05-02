//Kenner Rocha
import { DisplayOptions } from './index'
import './CSS/bodega.css'
export function Bodega({estado}){
    return(
        <div className="bodega" style={estado[3] ? DisplayOptions[0]: DisplayOptions[1]}>
            <h1>Soy la bodega</h1>
        </div>
    )
}