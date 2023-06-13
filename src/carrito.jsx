import { useSelector, useDispatch } from 'react-redux';
import { filtro, titulo, navStart } from './inicio';
import { ToastContainer, toast } from 'react-toastify';
import { remove, clear } from './redux/carritoslice';
import { UserNavBar } from './navbar';

import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import fondo from './assets/ksCarrito.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import 'react-toastify/dist/ReactToastify.css';

const compra = {
    height: "200px",
    width: "700px",
    margin: "20px 0px",
    backgroundColor: "rgba(33, 37, 41, 0.8)",
    color: "white",
    borderRadius: "30px",
    overflow: "hidden",
    transition: "1s ease all"
}
const cover = {
    margin:"0",
    minHeight: "200px",
    minWidth: "250px",
    maxHeight: "200px",
    maxWidth: "250px",
}
const vacio = {
    height: "200px",
    width: "700px",
    margin: "20px 0px",
    backgroundColor: "rgba(33, 37, 41, 0.8)",
    color: "white",
    borderRadius: "30px",
    overflow: "hidden",
    textAlign: "center",
    paddingTop: "70px"
}
const foto = {
    paddingLeft: "10px",
    minHeight: "200px",
    minWidth: "250px",
    maxHeight: "200px",
    maxWidth: "250px",
}
const panel = {
    backgroundColor: "rgba(33, 37, 41, 0.8)",
    height: "350px",
    margin: "20px",
    borderRadius: "30px",
    color: "white",
    paddingTop: "10px"
}
export function Carrito(){
    const { save } = useSelector((state)=>state.carrito)
    const carritoStyle = {
            width: "100vw", 
            height: "100vh",
            backgroundImage: "url("+fondo+")",
            backgroundSize: "100%"
    }
    return(
        <div style={carritoStyle}>
            <div style={filtro}>
                <Container>
                        <CarritoNav/>
                            <Row>
                                <Col>
                                    <Info carrito={save} />
                                </Col>
                                <Col>
                                    <Container style={{height: "550px", overflow: "scroll", scrollbarWidth: "none"}}>
                                        {(save.length!==0)?save.map((e,i)=>(
                                            <Compras key={i} datos={e} iu={i}/>
                                        )): <h1 style={vacio} >Carrito Vacio</h1>}
                                    </Container>
                                </Col>
                            </Row>
                </Container>
            </div>
        </div>
    )
}
function CarritoNav(){
    return(
        <Navbar style={navStart}>
        <Container>
        <Navbar.Brand style={titulo}>KongShoes</Navbar.Brand>
        <UserNavBar/>
        </Container>
    </Navbar>
    )
}
function Compras({datos, iu}){
    const dispatch = useDispatch()
    const prod = useSelector((state)=>state.logeado.iu)
    const quitar = ()=>{
        dispatch(remove(iu))
        toast.error('Se quito '+datos.nombre+" del carrito", {
            position: "bottom-right",
            autoClose: 2400,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
    }
    const comprar=()=>{
         fetch("http://localhost:9000/api/user/comprar", {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    "producto": datos.id,
                    "usuario": prod
                }
            )
        })
            .then(response => response.json())
            .finally(()=>{
                dispatch(remove(iu))
            })
            toast.success('Se ha comprado '+datos.nombre, {
                position: "bottom-right",
                autoClose: 2400,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
    }
    return(
        <div style={compra}>
            <ToastContainer/>
            <Row>
                <Col style={{padding:"0", marginRight: "10px"}} md={4}>
                    <div style={cover}>
                        <img src={datos.foto} style={foto} alt='...'/>
                    </div>
                </Col>
                <Col>
                    <Row style={{marginTop:"20px"}}>
                    <Col>
                        <Row>
                            <Col md={4}><p>Nombre:</p></Col>
                            <Col><p>{datos.nombre}</p></Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Col md={4}><p>Precio</p></Col>
                            <Col><p>{datos.precio}</p></Col>
                        </Row>
                    </Col>
                </Row>
                <Row style={{marginTop:"20px"}}>
                    <Col>
                        <Row>
                            <Col md={4}><p>Marca</p></Col>
                            <Col><p>{datos.marca} </p></Col>
                        </Row>
                    </Col>
                    </Row>
                    <Row style={{marginTop:"20px", paddingRight:"10px"}}>
                        <ButtonGroup aria-label="Basic example">
                            <Button onClick={comprar} variant="success">Comprar</Button>
                            <Button onClick={quitar} variant="danger">Quitar</Button>
                        </ButtonGroup>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}
function Info({carrito}){
    let precio = carrito.map(({precio})=>precio)
    let final
    let long = carrito.length
    if(long>0)final  = precio.reduce((a,b)=>{return a+b})
    const dispatch = useDispatch()
    return(
        <div style={panel}>
            <h3 style={{textAlign: "center", marginTop: "15px"}}>Informacion de compra</h3>
            <Container>
            <Row>
                <Col>
                    <Row style={{margin: "25px 0"}}>
                        <Col md={7}>
                            <p>total de productos:</p>
                        </Col>
                        <Col>
                            <p>{long}</p>
                        </Col>
                    </Row>
                    <Row style={{margin: "10px 0"}}>
                        <Col md={7}>
                            <p>Total de compra:</p>
                        </Col>
                        <Col>
                            <p>${final}</p>
                        </Col>
                    </Row>
                    <Row>
                    <ButtonGroup vertical>
                        <Button onClick={()=>dispatch(clear())} variant="danger">Vaciar carrito</Button>
                    </ButtonGroup>
                </Row>
                </Col>
            </Row>
            </Container>
        </div>
    )
} 