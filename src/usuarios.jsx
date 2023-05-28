import { useSelector} from 'react-redux';
import { filtro, titulo, navStart } from './inicio';
import { UserNavBar } from './navbar';
import marca from './assets/login(2).png';
import icon from './assets/icono.jpg';
import Container from 'react-bootstrap/Container';
import fondo from './assets/mgs.jpg';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react';
const cover = {
    minHeight: "150px",
    minWidth: "420px",
    maxHeight: "150px",
    maxWidth: "420px",
    borderRadius: "50px",
}
const icono = {
    minHeight: "150px",
    minWidth: "150px",
    maxHeight: "150px",
    maxWidth: "150px",
    borderRadius: "50px",
}
export function Usuarios(){
    const {mostrar} = useSelector((state)=>state.mostrando)
    const [expo, setExpo] = useState(1)
    const [us, setUs] = useState("clientes")
    const usuariosStyle = {
            display: mostrar[6],
            width: "100vw", 
            height: "100vh",
            backgroundImage: "url("+fondo+")",
            backgroundSize: "100%"
    }
    return(
        <div style={usuariosStyle}>
            <div style={filtro}>
                <Container>
                        <UsuariosNav/>
                        <Row style={{marginTop: "30px",}}>
                            <Col md={8}>
                                <Pantalla va={us} exp={expo}/>
                            </Col>
                            <Col md={4}>
                                <Tipo us={us} setUs={setUs}/>
                                <Lista settear={setExpo}/>
                            </Col>
                        </Row>
                </Container>
            </div>
        </div>
    )
}
function UsuariosNav(){
    return(
        <Navbar style={navStart}>
        <Container>
        <Navbar.Brand style={titulo}>KongShoes</Navbar.Brand>
        <UserNavBar/>
        </Container>
    </Navbar>
    )
}
function Lista({settear}){
    const distList = {
        borderRadius: "30px",
        maxWidth: "400px",
        height: "440px",
        overflow: "scroll",
        scrollbarWidth: "none",
        cursor: "pointer"
    }
    
    const exponer= (id)=>settear(id)
    return(
    <ListGroup variant="flush" style={distList}>
        <ListGroup.Item action onClick={()=>exponer(1)}>Bethesda</ListGroup.Item>
        <ListGroup.Item action onClick={()=>exponer(2)}>Rockstar</ListGroup.Item>
        <ListGroup.Item action onClick={()=>exponer(3)}>Ubisof</ListGroup.Item>
        <ListGroup.Item action onClick={()=>exponer(4)}>Devolver</ListGroup.Item>
        <ListGroup.Item action onClick={()=>exponer(5)}>Bethesda</ListGroup.Item>
        <ListGroup.Item action onClick={()=>exponer(6)}>Rockstar</ListGroup.Item>
        <ListGroup.Item action onClick={()=>exponer(7)}>Ubisof</ListGroup.Item>
        <ListGroup.Item action onClick={()=>exponer(8)}>Devolver</ListGroup.Item>
        <ListGroup.Item action onClick={()=>exponer(9)}>Bethesda</ListGroup.Item>
        <ListGroup.Item action onClick={()=>exponer(10)}>Rockstar</ListGroup.Item>
        <ListGroup.Item action onClick={()=>exponer(11)}>Ubisof</ListGroup.Item>
        <ListGroup.Item action onClick={()=>exponer(12)}>Devolver</ListGroup.Item>
        <ListGroup.Item action onClick={()=>exponer(13)}>Bethesda</ListGroup.Item>
        <ListGroup.Item action onClick={()=>exponer(14)}>Rockstar</ListGroup.Item>
        <ListGroup.Item action onClick={()=>exponer(15)}>Ubisof</ListGroup.Item>
        <ListGroup.Item action onClick={()=>exponer(16)}>Devolver</ListGroup.Item>
    </ListGroup>
    )
}
function Pantalla({exp, va}){
    if(va==="clientes"){
        return(
            <div style={{backgroundColor: "rgba(21,25,30,0.7)", borderRadius:"30px",height:"500px"}}>
              <Container>
                <Row className="py-3">
                    <h1 style={{color:"white", textAlign:"center"}}>Datos del usuario</h1>
                    <Row>
                        <Col className="offset-5 mb-3 mt-3">
                            <div style={icono}>
                                <img style={icono} src={icon} alt="..."/>
                            </div>
                        </Col>
                    </Row>
                    <Col style={{color: "white"}}>
                        <Row className="my-3">
                            <Col>
                                <p>Nombre del usuaio: </p>
                            </Col>
                            <Col>
                                <p>Usuario {exp}</p>
                            </Col>
                        </Row>
                        <Row className="my-3">
                            <Col>
                                <p>compras Realizadas: </p>
                            </Col>
                            <Col>
                                <p>150</p>
                            </Col>
                        </Row>
                        <Row className="my-3">
                            <Col>
                                <p>Total gastado: </p>
                            </Col>
                            <Col>
                                <p>$190000</p>
                            </Col>
                        </Row>
                        <Row className="my-3">
                            <Col>
                                <p>Fecha de Creacion: </p>
                            </Col>
                            <Col>
                                <p>10/11/2021</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col style={{color: "white"}}>
                        <Row className="my-3">
                            <Col>
                                <p>Ultima Compra: </p>
                            </Col>
                            <Col>
                                <p>zapatos {exp}</p>
                            </Col>
                        </Row>
                        <Row className="my-3">
                            <Col>
                                <p>marca: </p>
                            </Col>
                            <Col>
                                <p>marca de zapatos</p>
                            </Col>
                        </Row>
                        <Row className="my-3">
                            <Col>
                                <p>valor de la compra: </p>
                            </Col>
                            <Col>
                                <p>150000</p>
                            </Col>
                        </Row>
                        <Row className="my-3">
                            <Col>
                                <p>Fecha de Compra: </p>
                            </Col>
                            <Col>
                                <p>10/11/2021</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                </Container>
            </div>
        )
    }
    else if(va==="marcas"){
        return(
            <div style={{backgroundColor: "rgba(21,25,30,0.7)", borderRadius:"30px",height:"500px"}}>
                <Container>
                <h1 style={{color:"white", textAlign:"center"}}>Datos de Marca</h1>
                <Row>
                    <Col className="offset-2 mb-3 mt-3">
                        <div style={cover}>
                            <img style={cover} src={marca} alt="..."/>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col style={{color: "white"}}>
                        <Row className="my-3">
                            <Col md={4}>
                                <p>Nombre de la marca: </p>
                            </Col>
                            <Col>
                                <p>Marca random {exp}</p>
                            </Col>
                        </Row>
                        <Row className="my-3">
                            <Col md={4}>
                                <p>Productos </p>
                            </Col>
                            <Col>
                                <p>70</p>
                            </Col>
                        </Row>
                        <Row className="my-3">
                            <Col md={4}>
                                <p>Ventas </p>
                            </Col>
                            <Col>
                                <p>250</p>
                            </Col>
                        </Row>
                        <Row className="my-3">
                            <Col md={4}>
                                <p>Fecha de creracion</p>
                            </Col>
                            <Col>
                                <p>12/20/2009</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col style={{color: "white"}}>
                        <Row className="my-3">
                            <Col md={4}>
                                <p>Ultimo producto: </p>
                            </Col>
                            <Col>
                                <p>zapato {exp}</p>
                            </Col>
                        </Row>
                        <Row className="my-3">
                            <Col md={4}>
                                <p>Precio </p>
                            </Col>
                            <Col>
                                <p>70000</p>
                            </Col>
                        </Row>
                        <Row className="my-3">
                            <Col md={4}>
                                <p>Ventas</p>
                            </Col>
                            <Col>
                                <p>250</p>
                            </Col>
                        </Row>
                        <Row className="my-3">
                            <Col md={4}>
                                <p>Fecha añadida</p>
                            </Col>
                            <Col>
                                <p>10/17/2023</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                </Container>
            </div>
        )
    }
}
function Tipo({us, setUs}){
    return(
        <ButtonGroup style={{borderRadius:"50px", width:"100%", marginBottom:"20px"}}>
            <Button onClick={()=>setUs("clientes")} variant={(us==="clientes")?"success":"secondary"}>Clientes</Button>
            <Button onClick={()=>setUs("marcas")} variant={(us==="marcas")?"success":"secondary"}>Marcas</Button>
        </ButtonGroup>
    )
}