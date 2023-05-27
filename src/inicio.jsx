import { useSelector, useDispatch } from 'react-redux';
import { cambiar } from "./redux/mostrarslice";
import { deslogear } from './redux/usuarioSlice';
import React, { useState } from 'react';
import { clear } from './redux/carritoslice';
import { RegistrarMarca, Registrarse } from './login';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';

import reciente from './assets/tloztotk.webp'
import fondo from './assets/login.png';
import './CSS/inicio.css';

export const navStart = {
    borderRadius: "20px",
    backgroundColor: "rgba(33, 37, 41, 0.8)"
}
export const titulo = {
    color: "white",
    fontSize: "30px",
    fontWeight: "bold",
    cursor: "pointer"
}
export const filtro = {
    backgroundColor: "rgba(21,25,30,0.7)", 
    width: "100vw", 
    height: "100vh",
    paddingTop: "20px"
}
const distList = {
    borderRadius: "30px",
    maxWidth: "250px",
    height: "480px",
    overflow: "scroll",
    scrollbarWidth: "none",
}
const contBanner = {
    width: "550px",
    height: "200px",
    overflow: "hidden",
    borderRadius: "30px",
    padding: "0",
    backgroundImage: "url(https://www.giantfreakinrobot.com/wp-content/uploads/2023/05/hollow-knight-900x492.png)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
}
const bannerName = {
    backgroundColor: "rgba(21,25,30,0.7)",
    color: "white",
    width: "550px", 
    height: "200px",
    fontSize: "20px",
    textAlign: "center",
    paddingTop: "165px",
    cursor: "pointer",
    transition: "opacity 0.3s ease-out, padding 0.35s ease-out",
}
const bannerOff = {
    opacity: "0",
    backgroundColor: "rgba(21,25,30,0.7)",
    color: "white",
    width: "550px", 
    height: "200px",
    fontSize: "20px",
    textAlign: "center",
    paddingTop: "10px",
    cursor: "pointer",
    transition: "opacity 0.3s ease-out, padding 0.35s ease-out",
}

const underText = {
    color: "white",
    textAlign: "center",
    padding: "0 10px"
}
const underFiltro = {
    backgroundColor: "rgba(21,25,30,0.7)",
    width: "180px",
    height: "250px",
    transition: "opacity 0.3s, padding 0.35s ease",
    
}
const underFiltroff = {
    backgroundColor: "rgba(21,25,30,0.7)",
    width: "180px",
    height: "250px",
    paddingTop: "80px",
    opacity: "0",
    transition: "opacity 0.3s, padding 0.35s ease",
    cursor: "pointer",
}
const valorado = {
    width: "350px",
    height: "480px",
    borderRadius: "30px",
    backgroundImage: "url(https://cdn.mobygames.com/f7ec8bee-ac0a-11ed-96e1-02420a00012d.webp)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    cursor: "pointer",
    overflow: "hidden"
}
const valoradoFiltro = {
    backgroundColor: "rgba(21,25,30,0.7)",
    width: "350px",
    height: "480px",
    opacity: "1",
    transition: "opacity 0.3s, padding 0.35s ease",
    cursor: "pointer",
    textAlign: "center",
    color: "white"
}
const valoradoFiltroff = {
    backgroundColor: "rgba(21,25,30,0.7)",
    width: "350px",
    height: "480px",
    opacity: "0",
    transition: "opacity 0.3s, padding 0.35s ease",
    cursor: "pointer",
    textAlign: "center",
    color: "white",
    paddingLeft: "200px"
}
export function Inicio(){
    const {mostrar} = useSelector((state)=>state.mostrando)
    const startStyle = {
        display: mostrar[1],
        width: "100vw", 
        height: "100vh",
        backgroundImage: "url("+fondo+")",
        backgroundSize: "100%"
    }  
    return(
        <div className="inicio" style={startStyle}>
            <div style={filtro}>
            <Container>
                <NavStart/>
                <Row style={{marginTop: "30px",}}>
                    <Col>
                    <ListGroup variant="flush" style={distList}>
                        <ListGroup.Item>Bethesda</ListGroup.Item>
                        <ListGroup.Item>Rockstar</ListGroup.Item>
                        <ListGroup.Item>Ubisof</ListGroup.Item>
                        <ListGroup.Item>Devolver</ListGroup.Item>
                        <ListGroup.Item>Bethesda</ListGroup.Item>
                        <ListGroup.Item>Rockstar</ListGroup.Item>
                        <ListGroup.Item>Ubisof</ListGroup.Item>
                        <ListGroup.Item>Devolver</ListGroup.Item>
                        <ListGroup.Item>Bethesda</ListGroup.Item>
                        <ListGroup.Item>Rockstar</ListGroup.Item>
                        <ListGroup.Item>Ubisof</ListGroup.Item>
                        <ListGroup.Item>Devolver</ListGroup.Item>
                        <ListGroup.Item>Bethesda</ListGroup.Item>
                        <ListGroup.Item>Rockstar</ListGroup.Item>
                        <ListGroup.Item>Ubisof</ListGroup.Item>
                        <ListGroup.Item>Devolver</ListGroup.Item>
                    </ListGroup>
                    </Col>
                    <Col>
                        <Row>
                            <BannerStart/>
                            <Row id="under">
                                <Col md={4}><Under tipo={"Mas vendidos"} url={"https://cdn.mobygames.com/22778766-ab8d-11ed-be6f-02420a000197.webp"}/></Col>
                                <Col md={4}><Under tipo={"Ultimos añadidos"} url={reciente}/></Col>
                                <Col md={4}><Under tipo={"Ultimas Unidades"} url={"https://upload.wikimedia.org/wikipedia/en/b/b4/Halo_3_final_boxshot.JPG"}/></Col>
                            </Row>
                        </Row>
                    </Col>
                    <Col>
                        <Mejor/>
                    </Col>
                </Row>
            </Container>
            </div>
        </div>
    )
}
function NavStart(){
    const dispatch = useDispatch()
    const {id} = useSelector((state)=>state.logeado)
    if(id==="2"){
        return(
            <Navbar style={navStart}>
            <Container>
            <Navbar.Brand style={titulo}>KongShoes</Navbar.Brand>
            <Nav className="d-flex">
                <Nav.Link><Button variant="danger"  onClick={()=>{dispatch(cambiar(0));dispatch(deslogear())}}>Cerrar sesion</Button></Nav.Link>
                <Nav.Link><Button variant="warning" onClick={()=>dispatch(cambiar(2))}>Tienda</Button></Nav.Link>
                <Nav.Link><Button variant="primary" onClick={()=>dispatch(cambiar(5))}>Biblioteca</Button></Nav.Link>
                <Nav.Link><Button variant="light"   onClick={()=>dispatch(cambiar(4))}>Carrito</Button></Nav.Link>
            </Nav>
            </Container>
        </Navbar>
        )
    }
    else if(id==="1"){
        return(
            <Navbar style={navStart}>
            <Container>
            <Navbar.Brand style={titulo}>KongShoes</Navbar.Brand>
            <Nav className="d-flex">
                <Nav.Link><Button variant="danger"  onClick={()=>{dispatch(cambiar(0));dispatch(deslogear())}}>Cerrar sesion</Button></Nav.Link>
                <Nav.Link><Button variant="warning" onClick={()=>dispatch(cambiar(2))}>Tienda</Button></Nav.Link>
                <Nav.Link><Button variant="primary" onClick={()=>dispatch(cambiar(3))}>Bodega</Button></Nav.Link>
                <Nav.Link><Button variant="info" onClick={()=>dispatch(cambiar(3))}>Usuarios</Button></Nav.Link>
            </Nav>
            </Container>
        </Navbar>
        )
    }else if(id==="3"){
        return(
        <Navbar style={navStart}>
        <Container>
        <Navbar.Brand style={titulo}>KongShoes</Navbar.Brand>
        <Nav className="d-flex">
            <Nav.Link><Button variant="danger"  onClick={()=>{dispatch(cambiar(0));dispatch(deslogear());dispatch(clear())}}>Cerrar sesion</Button></Nav.Link>
            <Nav.Link><Button variant="warning" onClick={()=>dispatch(cambiar(2))}>Tienda</Button></Nav.Link>
            <Nav.Link><Button variant="primary" onClick={()=>dispatch(cambiar(3))}>Bodega</Button></Nav.Link>
        </Nav>
        </Container>
        </Navbar>
        )
    }else{
        return(
            <Navbar style={navStart}>
            <Container>
            <Navbar.Brand style={titulo}>KongShoes</Navbar.Brand>
            <Nav className="d-flex">
                <RegistrarMarca/>
                <Nav.Link><Button variant="info" onClick={()=>dispatch(cambiar(0))}>Iniciar Sesion</Button></Nav.Link>
                <Registrarse/>
                <Nav.Link><Button variant="warning" onClick={()=>dispatch(cambiar(2))}>tienda</Button></Nav.Link>
            </Nav>
            </Container>
        </Navbar>
        )
    }
}
function BannerStart(){
    const [hover, setHover] = useState(false)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handlerShow = () =>{
        setShow(true)
    }
    const userHover=()=>{
        setHover(true)
    }
    const noUserHover=()=>{
        setHover(false)
    }
    return(
        <div style={contBanner}>
            <div onClick={handlerShow} onMouseEnter={userHover} onMouseLeave={noUserHover} style={hover? bannerName: bannerOff}>
                <p>Marca: KongShoes</p>
            </div>
            <Modal size="lg" show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <h1 style={{color:"white"}}>KongShoes</h1>
                    </Modal.Header>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
            </Modal>
        </div>
    )
}
function Under({tipo, url}){
    const cover = {
        marginTop: "25px",
        width: "180px",
        height: "250px",
        padding: "0",
        borderRadius: "30px",
        overflow: "hidden",
        backgroundImage: "url("+url+")",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        cursor: "pointer",
    }
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handlerShow = () =>{
        setShow(true)
    }
    const [hover, setHover] = useState(false)
    const userHover=()=>{
        setHover(true)
    }
    const noUserHover=()=>{
        setHover(false)
    }
    return(
        <div style={cover}>
            <div onClick={handlerShow}  onMouseEnter={userHover} onMouseLeave={noUserHover} style={hover? underFiltro:underFiltroff}>
                <p style={underText}>{tipo}</p>
            </div>
            <Modal size="lg" show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <h1 style={{color:"white"}}>{tipo}</h1>
                    </Modal.Header>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
            </Modal>
        </div>
    )
}
function Mejor(){
    const [hover, setHover] = useState(false)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handlerShow = () =>{
        setShow(true)
    }
    const userHover=()=>{
        setHover(true)
    }
    const noUserHover=()=>{
        setHover(false)
    }
    return(
        <div style={valorado}>
            <div onClick={handlerShow} onMouseEnter={userHover} onMouseLeave={noUserHover} style={hover? valoradoFiltro:valoradoFiltroff}>
                <p>Mejores Valorados</p>
            </div>
            <Modal size="lg" show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <h1 style={{color:"white"}}>Mejores Puntuados</h1>
                    </Modal.Header>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
            </Modal>
        </div>
    )
}
