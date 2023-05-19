import { cambiar } from "./redux/mostrarslice"
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
export function Navbar(){
    const { id } = useSelector((state)=>state.logeado)
    if(id==="1"){
        return(
            <Admin/>
        )
    }
    else if (id==="2"){
        return(
            <Cliente/>
        )
    } 
    else{
        return(
            <Unloggin/>
        )
    }
}
function Admin(){
    const dispatch = useDispatch()
    return(
        <div>
            <button onClick={()=>dispatch(cambiar(0))}>Login</button>
            <button onClick={()=>dispatch(cambiar(1))}>inicio</button>
            <button onClick={()=>dispatch(cambiar(2))}>tienda</button>
            <button onClick={()=>dispatch(cambiar(3))}>Bodega</button>
            <button onClick={()=>dispatch(cambiar(4))}>Carrito</button>
        </div>
    )
}
function Unloggin(){
    const dispatch = useDispatch()
    return(
        <div>
            <button onClick={()=>dispatch(cambiar(0))}>Login</button>
            <button onClick={()=>dispatch(cambiar(1))}>inicio</button>
            <button onClick={()=>dispatch(cambiar(2))}>tienda</button>
        </div>
    )
}
function Cliente(){
    const dispatch = useDispatch()
    return(
        <div>
            <button onClick={()=>dispatch(cambiar(0))}>Login</button>
            <button onClick={()=>dispatch(cambiar(1))}>inicio</button>
            <button onClick={()=>dispatch(cambiar(2))}>tienda</button>
            <button onClick={()=>dispatch(cambiar(4))}>Carrito</button>
        </div>
    )
}
