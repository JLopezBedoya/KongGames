import { useSelector } from 'react-redux'
export function Tienda(){
    const {mostrar} = useSelector((state)=>state.mostrando)
    return(
        <div className="tienda" style={{display:mostrar[2]}}>
            <h1>Soy la Tienda</h1>
        </div>
    )
}