import { useSelector } from 'react-redux'
export function Inicio(){
    const {mostrar} = useSelector((state)=>state.mostrando)
    return(
        <div className="inicio" style={{display: mostrar[1]}}>
            <h1>Soy el inicio</h1>
        </div>
    )
}