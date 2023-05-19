import { useSelector } from 'react-redux'
export function Bodega(){
    const {mostrar} = useSelector((state)=>state.mostrando)
    return(
        <div className="bodega" style={{display: mostrar[3]}}>
            <h1>Soy el bodega</h1>
        </div>
    )
}