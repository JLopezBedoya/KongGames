import { useSelector } from 'react-redux'
import Container from 'react-bootstrap/Container';
import fondo from './assets/mgs.jpg';
import { filtro } from './inicio';

export function Tienda(){
    const {mostrar} = useSelector((state)=>state.mostrando)
    const storeStyle = {
        display: mostrar[2],
        width: "100vw", 
        height: "100vh",
        backgroundImage: "url("+fondo+")",
        backgroundSize: "98%",
    }
    return(
        <div className="tienda" style={storeStyle}>
            <div style={filtro}>
                <Container>
                    
                </Container>
            </div>
        </div>
    )
}
function StoreNavBar(){
    
}