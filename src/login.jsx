import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { cambiar } from "./redux/mostrarslice";

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import fondo from './assets/btf.jpg';
import cliente from './assets/link.jpg';
import admin from './assets/dmc.png';
import vendedor from './assets/r4.jpeg';
import icono from './assets/icono.jpg';

import './CSS/login.css'
const tarjetaLogin = { 
    width: '22rem', 
    maxHeight: '27rem', 
    minHeight: '27rem',
    marginTop: '20px', 
    color: "white",
    backgroundColor: "rgba(33, 37, 41, 0.8)",
};
const tarjetaBody = {
    maxHeight: '6rem', 
    minHeight: '6rem',
}
const centrar = {
    textAlign: "center",
    marginBottom: "15px",
    fontWeight: "bold"
}
const boton = {
    marginLeft: "100px"
}
const barra = {
    borderRadius: "20px",
    backgroundColor: "rgba(33, 37, 41, 0.8)"
}
export function Login(){
    const { mostrar } = useSelector((state)=>state.mostrando)
    const loginStyle = {
        display: mostrar[0], 
        width: "100vw", 
        height: "100vh",
        backgroundImage: "url("+fondo+")"
    }
    const filtro = {
        backgroundColor: "rgba(21,25,30,0.7)", 
        width: "100vw", 
        height: "100vh",
        paddingTop: "20px"
    }

    return(
        <div style={loginStyle}>
            <div style={filtro}>
            <Container>
                <Unloggin/>
                <Row style={{marginTop: "30px"}}>
                    <Col>
                        <Cliente/>
                    </Col>
                    <Col>
                        <Admin/>
                    </Col>
                    <Col>
                        <Vendedor/>
                    </Col>
                </Row>
            </Container>
            </div>
        </div>
    )
}
function Cliente(){
    return(
        <Card style={tarjetaLogin}>
        <Card.Img variant="top" src={cliente} />
        <Card.Body>
          <Card.Title style={centrar} id='cliente' >COMO CLIENTE</Card.Title>
          <Card.Text style={tarjetaBody}>
            Se tiene acceso al carrito y a la biblioteca donde
            se almacenan los juegos comprados
            </Card.Text>
            <Formulario tipo={"success"} usuario={"Cliente"}/>
        </Card.Body>
      </Card>
    )
}
function Admin(){
    return(
        <Card style={tarjetaLogin}>
        <Card.Img variant="top" src={admin}/>
        <Card.Body>
          <Card.Title style={centrar} id="admin">COMO ADMINISTRADOR</Card.Title>
          <Card.Text style={tarjetaBody}>
            se tiene acceso a la bodega donde se pueden añadir, modificar y borrar
            los juegos ya existentes, mas opciones pronto...
            </Card.Text>
          <Formulario tipo={"danger"} usuario={"Administrador"}/>
        </Card.Body>
      </Card>
    )
}
function Vendedor(){
    return(
        <Card style={tarjetaLogin}>
        <Card.Img variant="top" src={vendedor} />
        <Card.Body>
          <Card.Title style={centrar} id="vendedor">COMO VENDEDOR</Card.Title>
          <Card.Text style={tarjetaBody}>
                puedes añadir, modificar y eliminar los juegos que hayas
                Subido como distribuidor, mas opciones pronto...
            </Card.Text>
          <Formulario tipo={"primary"} usuario={"Vendedor"}/>
        </Card.Body>
      </Card>
    )
}
function Unloggin(){
    const dispatch = useDispatch()
    return(
        <Navbar style={barra}>
        <Container>
          <Navbar.Brand></Navbar.Brand>
          <Nav className="justify-content-end">
            <h1 className='titulo'>COMO DESEA INGRESAR?</h1>
            <Nav.Link><Button variant="success" onClick={()=>dispatch(cambiar(1))}>inicio</Button></Nav.Link>
            <Nav.Link><Button variant="primary" onClick={()=>dispatch(cambiar(2))}>tienda</Button></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}
function Formulario({tipo, usuario}) {
  const [show, setShow] = useState(false);
  const username = useRef()
  const pssword = useRef()

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleDatos = () =>{
    if(usuario==="Administrador"){
      console.log("Administrador")
      console.log(username.current.value);
      console.log(pssword.current.value);
    }
    else if(usuario==="Vendedor"){
      console.log("Vendedor")
      console.log(username.current.value);
      console.log(pssword.current.value);
    }
    else if(usuario==="Cliente"){
      console.log("Cliente")
      console.log(username.current.value);
      console.log(pssword.current.value);
    }
  }
  return (
    <div>
      <Button style={boton} variant={tipo} onClick={handleShow}>Iniciar Sesion</Button>
      <Modal show={show} onHide={handleClose}>
      <div className='formulario'>
        <img className="loginicon" src={icono} alt="..."/>
        <h2 className='titulogin'>Bienvenido {usuario} </h2>
        <Form style={{padding: "20px"}}>
          <Form.Group className="mb-3" controlId="username">
          <Form.Label style={{color:"white"}}>Nombre del usuario</Form.Label>
          <Form.Control ref={username} type="text" placeholder="Su nombre" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
          <Form.Label style={{color:"white"}}>Contraseña del usuario</Form.Label>
          <Form.Control ref={pssword} type="password" placeholder="Su contraseña" />
          </Form.Group>
          <Row style={{padding: "20px"}}>
          <Button onClick={handleDatos} variant={"success"}>Comprobar</Button>
          <Button onClick={handleClose} variant={"danger"}>Cerrar</Button>
          </Row>
        </Form>
      </div>
      </Modal>
    </div>
  );
}

