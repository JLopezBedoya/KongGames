import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cambiar } from "./redux/mostrarslice";
import { logear } from './redux/usuarioSlice';
import { FiUserPlus } from "react-icons/fi";
import { BsBuildingAdd } from "react-icons/bs";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { NoUserNavBar } from './navbar';
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
            se almacenan los zapatos comprados
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
            los zapatos ya existentes, mas opciones pronto...
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
          <Card.Title style={centrar} id="vendedor">COMO MARCA</Card.Title>
          <Card.Text style={tarjetaBody}>
                puedes añadir, modificar y eliminar los Zapatos que hayas
                Subido como distribuidor, mas opciones pronto...
            </Card.Text>
          <Formulario tipo={"primary"} usuario={"Marca"}/>
        </Card.Body>
      </Card>
    )
}
function Unloggin(){
    return(
        <Navbar style={barra}>
        <Container>
          <Navbar.Brand></Navbar.Brand>
          <Nav className="justify-content-end">
            <h1 className='titulo'>COMO DESEA INGRESAR?</h1>
            <NoUserNavBar/>
          </Nav>
        </Container>
      </Navbar>
    )
}
function Formulario({tipo, usuario}) {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch()
  const username = useRef()
  const pssword = useRef()

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleDatos = () =>{
    if(usuario==="Administrador"){
        if(username.current.value==="pizza" && pssword.current.value==="sinpiña"){
          handleClose()
          dispatch(cambiar(1))
          dispatch(logear({nombre:"Admin", id:"1"}))
        }
        else{
          alert("Usuario y/o Contraseña incorrecta para admin")
        }
    }else if(usuario==="Marca"){
      if(username.current.value==="pizza" && pssword.current.value==="sinpiña"){
        handleClose()
        dispatch(cambiar(1))
        dispatch(logear({nombre:"343", id:"3"}))
      }
      else{
        alert("Usuario y/o Contraseña incorrecta para distribuidor")
      }
  }else if(usuario==="Cliente"){
    if(username.current.value==="pizza" && pssword.current.value==="sinpiña"){
      handleClose()
      dispatch(cambiar(1))
      dispatch(logear({nombre:"Random", id:"2"}))
    }
    else{
      alert("Usuario y/o Contraseña incorrecta para cliente")
    }
    }
  }
  return (
    <div>
      <Button style={boton} variant={tipo} onClick={handleShow}>Iniciar Sesion</Button>
      <Modal show={show} onHide={handleClose}>
      <div className='formulario'>
        <img className="loginicon" src={icono} alt="..."/>
        <h2 className='titulogin'>Bienvenido {usuario} </h2>
        <Form style={{padding: "10px"}}>
          <Form.Group className="mb-2" controlId="username">
          <Form.Label style={{color:"white"}}>Nombre del usuario</Form.Label>
          <Form.Control ref={username} type="text" placeholder="Su nombre" />
          </Form.Group>
          <Form.Group className="mb-2" controlId="password">
          <Form.Label style={{color:"white"}}>Contraseña del usuario</Form.Label>
          <Form.Control ref={pssword} type="password" placeholder="Su contraseña" />
          </Form.Group>
          <Row style={{padding: "20px"}}>
          <ButtonGroup vertical>
                    <Button onClick={handleDatos} variant={"success"}>iniciar Sesion</Button>
                    <Button onClick={handleClose} variant={"danger"}>Cerrar</Button>
          </ButtonGroup>
          </Row>
        </Form>
      </div>
      </Modal>
    </div>
  );
}
export function RegistrarMarca(){
  const marcabanner = {
    maxHeight:"150px",
    overflow: "hidden"
}
  const formulario = {
      width: "100%",
      height: "100%"
  }
  const loginicon = {
      maxWidth: "150px",
      borderRadius: "70px",
      paddingTop: "5px",
  }
  const titulogin = {
      textAlign: "center",
      color: "white",
      fontWeight: "bold"
  }
  const [url, setUrl] = useState("https://www.giantfreakinrobot.com/wp-content/uploads/2023/05/hollow-knight-900x492.png")
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);
  const username = useRef()
  const pssword = useRef()
  const email = useRef()
  const confirmacion = useRef()
  const desc = useRef()
  const handleDatos = ()=>{
      let nombre = username.current.value
      let password = pssword.current.value
      let mail = email.current.value
      let conf = confirmacion.current.value
      let dsc = desc.current.value
      console.log(nombre)
      console.log(password)
      console.log(mail)
      console.log(conf)
      console.log(dsc) 
  }
  return (
      <div>
        <Button className="mt-2" variant="." style={{color:"white", fontSize:"20px"}} onClick={handleShow}><BsBuildingAdd/></Button>
        <Modal size="xl" show={show} onHide={handleClose}>
        <div style={formulario}>
          <Container>
              <Row>
                  <Col className="offset-1" md={2}>
                      <img style={loginicon} src={icono} alt="..."/>
                  </Col>
                  <Col>
                      <h2 style={titulogin}>Registrate en KonShoes</h2>
                      <p style={{color:"white"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                          Esse voluptatem corrupti optio eos praesentium doloremque 
                          rerum totam? Magni vel odit fuga autem atque quo saepe 
                          beatae voluptate corporis unde! Voluptatem!
                      </p>
                  </Col>
                  <Col md={1}></Col>
              </Row>
          </Container>
          <Form style={{padding: "20px"}}>
              <Row>
                  <Col>
                    <Row>
                      <Col>
                          <Form.Group className="mb-3" controlId="username">
                              <Form.Label style={{color:"white"}}>Nombre de usuario</Form.Label>
                              <Form.Control ref={username} type="text" placeholder="Su nombre" />
                          </Form.Group>
                      </Col>
                      <Col>
                          <Form.Group className="mb-3">
                              <Form.Label style={{color:"white"}}>Correo</Form.Label>
                              <Form.Control ref={email} type="text" placeholder="Su email" />
                          </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                          <Form.Group className="mb-3" controlId="password">
                            <Form.Label style={{color:"white"}}>Contraseña</Form.Label>
                            <Form.Control ref={pssword} type="password" placeholder="Su contraseña" />
                          </Form.Group>
                      </Col>
                      <Col>
                              <Form.Group className="mb-3">
                              <Form.Label style={{color:"white"}}>Confirme la contraseña</Form.Label>
                              <Form.Control ref={confirmacion} type="password" placeholder="confirmar contraseña" />
                              </Form.Group>
                          </Col>
                      </Row>
                  </Col>
                  <Col>
                      <Form.Label style={{color:"white"}}>Describa su marca</Form.Label>
                      <Form.Control as="textarea" ref={desc} style={{ resize: 'none' }} placeholder='Describa su marca'/>
                  </Col>
              </Row>

            <Row style={{padding: "20px"}}>
              <Col md={6}>
                  <Row>
                      <Form.Group className="mb-3">
                              <Form.Label style={{color:"white"}}>Banner de la marca</Form.Label>
                              <Form.Control onChange={({target})=>setUrl(target.value)} type="text" placeholder="el URL de su banner" />
                      </Form.Group>
                      <ButtonGroup style={{maxWidth: "100%", minWidth: "100%"}}>
                          <Button onClick={handleDatos} variant={"success"}>Crear</Button>
                          <Button onClick={handleClose} variant={"danger"}>Cerrar</Button>
                      </ButtonGroup>
                  </Row>
              </Col>
              <Col>
                  <Row style={marcabanner}><img style={marcabanner} src={url} alt="..."/></Row>
              </Col>
            </Row>
          </Form>
        </div>
        </Modal>
      </div>
    );
}
export function Registrarse(){
  const formulario = {
      width: "100%",
      height: "100%"
  }
  const loginicon = {
      maxWidth: "150px",
      borderRadius: "70px",
      paddingTop: "5px"
  }
  const titulogin = {
      textAlign: "center",
      color: "white",
      fontWeight: "bold"
  }
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);
  const username = useRef()
  const pssword = useRef()
  const email = useRef()
  const confirmacion = useRef()
  const handleDatos = ()=>{
      let nombre = username.current.value
      let password = pssword.current.value
      let mail = email.current.value
      let conf = confirmacion.current.value
      console.log(nombre)
      console.log(password)
      console.log(mail)
      console.log(conf) 
  }
  return (
      <div>
        <Button className="mt-2" variant="." style={{color:"white", fontSize:"20px"}} onClick={handleShow}><FiUserPlus/></Button>
        <Modal size="lg" show={show} onHide={handleClose}>
        <div style={formulario}>
          <Container>
              <Row>
                  <Col md={3}>
                      <img style={loginicon} src={icono} alt="..."/>
                  </Col>
                  <Col>
                      <h2 style={titulogin}>Registrate en KonShoes</h2>
                      <p style={{color:"white"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                          Esse voluptatem corrupti optio eos praesentium doloremque 
                          rerum totam? Magni vel odit fuga autem atque quo saepe 
                          beatae voluptate corporis unde! Voluptatem!
                      </p>
                  </Col>
              </Row>
          </Container>
          <Container style={{padding: "20px"}}>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="username">
                <Form.Label style={{color:"white"}}>Nombre de usuario</Form.Label>
                <Form.Control ref={username} type="text" placeholder="Su nombre" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="email">
                  <Form.Label style={{color:"white"}}>Correo</Form.Label>
                  <Form.Control ref={email} type="text" placeholder="Su email" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
              <Col>
                  <Form.Group className="mb-3" controlId="password">
                    <Form.Label style={{color:"white"}}>Contraseña</Form.Label>
                    <Form.Control ref={pssword} type="password" placeholder="Su contraseña" />
                  </Form.Group>
              </Col>
              <Col>
                  <Form.Group className="mb-3">
                    <Form.Label style={{color:"white"}}>Confirme la contraseña</Form.Label>
                    <Form.Control ref={confirmacion} type="password" placeholder="confirmar contraseña" />
                  </Form.Group>
              </Col>
          </Row>

            <Row style={{padding: "20px"}}>
              <ButtonGroup vertical>
                  <Button onClick={handleDatos} variant={"success"}>Crear</Button>
                  <Button onClick={handleClose} variant={"danger"}>Cerrar</Button>
              </ButtonGroup>
            </Row>
          </Container>
        </div>
        </Modal>
      </div>
    );
}

