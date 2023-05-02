//Carlos Quintero
import { DisplayOptions } from './index'
import './CSS/login.css'
export function Login({estado}){
    return(
        <div className="login" style={estado[0] ? DisplayOptions[0]: DisplayOptions[1]}>
            <h1>Soy el Login</h1>
        </div>
    )
}