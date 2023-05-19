import { useSelector } from 'react-redux'
export function Carrito(){
    const {mostrar} = useSelector((state)=>state.mostrando)
    return(
        <div className="carrito" style={{display: mostrar[4]}}>
            <h1>Soy el carrito</h1>
        </div>
    )
}