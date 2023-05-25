import { useSelector, useDispatch } from 'react-redux';
import { cambiar } from "./redux/mostrarslice";
import { deslogear } from './redux/usuarioSlice';
import { filtro, titulo, navStart } from './inicio';
import Container from 'react-bootstrap/Container';
import fondo from './assets/mgs.jpg';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const compra = {
    height: "520px",
    width: "300px",
    backgroundColor: "rgba(33, 37, 41, 0.8)",
    color: "white",
    borderRadius: "30px",
    overflow: "hidden",
    marginBottom: "10px"
}
const cover = {
    margin:"0",
    minHeight: "240px",
    minWidth: "300px",
    maxHeight: "240px",
    maxWidth: "300px",
}
const foto = {
    minHeight: "240px",
    minWidth: "300px",
    maxHeight: "240px",
    maxWidth: "300px",
}
const panel = {
    backgroundColor: "rgba(33, 37, 41, 0.8)",
    height: "500px",
    margin: "20px",
    borderRadius: "30px",
    color: "white",
    paddingTop: "10px"
}
export function Bodega(){
    const {mostrar} = useSelector((state)=>state.mostrando)
    const bodegaStyle = {
        display: mostrar[3],
        width: "100vw", 
        height: "100vh",
        backgroundImage: "url("+fondo+")",
        backgroundSize: "100%"
    }
    return(
        <div style={bodegaStyle}>
            <div style={filtro}>
                <Container>
                    <NavBodega/>
                    <Row style={{marginTop: "20px",}}>
                        <Col md={7} style={{overflow: "scroll", scrollbarWidth: "none", height: "530px",}}>
                            <Row>
                                <Col>
                                    <Productos/>
                                </Col>
                                <Col>
                                    <Productos/>
                                </Col>
                                <Col>
                                    <Productos/>
                                </Col>
                                <Col>
                                    <Productos/>
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <Info/>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
function NavBodega(){
    const dispatch = useDispatch()
    return(
        <Navbar style={navStart}>
        <Container>
        <Navbar.Brand style={titulo}>KongShoes</Navbar.Brand>
        <Nav className="d-flex">
            <Nav.Link><Button variant="danger"  onClick={()=>{dispatch(cambiar(0));dispatch(deslogear())}}>Cerrar sesion</Button></Nav.Link>
            <Nav.Link><Button variant="warning" onClick={()=>dispatch(cambiar(2))}>Tienda</Button></Nav.Link>
            <Nav.Link><Button variant="primary" onClick={()=>dispatch(cambiar(1))}>inicio</Button></Nav.Link>
        </Nav>
        </Container>
        </Navbar>
        )
}
function Productos(){
    return(
        <div style={compra}>
        <Row>
            <Col md={4}>
                <div style={cover}>
                    <img src='https://cdn.mobygames.com/4d4a9422-abd5-11ed-ba50-02420a000199.webp' style={foto} alt='...'/>
                </div>
            </Col>
        </Row>
        <Row>
            <Col>
                <Row>
                    <Col md={3}>
                        <p> Nombre:</p>
                    </Col>
                    <Col>
                        <p>zapato generico</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={3}>
                        <p>Marca:</p>
                    </Col>
                    <Col>
                        <p>Marca creado por ia</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={3}>
                        <p>Precio:</p>
                    </Col>
                    <Col>
                        <p>198.000</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={3}>
                        <p>Puntuacio:</p>
                    </Col>
                    <Col>
                        <p>9/10</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={3}>
                        <p>ventas:</p>
                    </Col>
                    <Col>
                        <p>125</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={3}>
                        <p>cantidad:</p>
                    </Col>
                    <Col>
                        <p>35</p>
                    </Col>
                </Row>
                <Row>
                    <ButtonGroup>
                        <Button variant="primary">Editar</Button>
                        <Button variant="danger">Eliminar</Button>
                    </ButtonGroup>
                </Row>
            </Col>
        </Row>
    </div>
    )
}
function Info(){
    return(
        <div style={panel}>
            <h1 style={{textAlign: "center", marginBottom: "25px"}}>Panel de Informacion</h1>
            <Container>
            <Row>
                <Col>
                    <Row>
                        <Col md={6}>
                            <p>Total de productos:</p>
                        </Col>
                        <Col>
                            <p>75</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <p>Ventas Generales:</p>
                        </Col>
                        <Col>
                            <p>550</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <p>Ventas de esta semana:</p>
                        </Col>
                        <Col>
                            <p>50</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <p>Marca con mas ventas:</p>
                        </Col>
                        <Col>
                            <p>Marca Random</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <p>Producto mas vendido:</p>
                        </Col>
                        <Col>
                            <p>Zapato random</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <p>Promedio de ventas por zapato::</p>
                        </Col>
                        <Col>
                            <p>54</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <p>Total de Usuarios:</p>
                        </Col>
                        <Col>
                            <p>234</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <p>Promedio de compras por usuario:</p>
                        </Col>
                        <Col>
                            <p>59</p>
                        </Col>
                    </Row>
                    <Row>
                    <ButtonGroup>
                        <Button variant="warning">Añadir</Button>
                        <Button variant="info">Peticiones</Button>
                    </ButtonGroup>
                </Row>
                </Col>
            </Row>
            </Container>
        </div>
    )
}