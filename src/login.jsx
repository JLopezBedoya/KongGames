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
import fondo from './assets/ksLogin.png';
import cliente from './assets/kgLogin.png';
import admin from './assets/KsAdmin.png';
import vendedor from './assets/kgMarca.png';
import icono from './assets/icono.jpg';
import pordef from './assets/KsTienda2.png'
import './CSS/login.css'
import { useGet } from './hooks/useGet'
const tarjetaLogin = { 
    width: '22rem', 
    maxHeight: '27rem', 
    minHeight: '27rem',
    marginTop: '20px', 
    color: "white",
    backgroundColor: "rgba(33, 37, 41, 0.5)",
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
    const {info, loading} = useGet("/shoes/ver")
    if(loading){
      console.log("cargando...")
    }else{
      console.log(info)
    }
    const { mostrar } = useSelector((state)=>state.mostrando)
    const loginStyle = {
        display: mostrar[0], 
        width: "100vw", 
        height: "100vh",
        backgroundImage: "url("+fondo+")",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
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
            <Container>
            Se tiene acceso al carrito, a la opcion de comprar productos y a la biblioteca donde
            se almacenan los zapatos comprados
            </Container>
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
            <Container>
            se tiene acceso al panel de Usuarios y a la bodega donde se pueden añadir, modificar y borrar
            los zapatos ya existentes
            </Container>
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
              <Container>
              se tiene acceso a la bodega de la marca donde se pueden hacer 
              peticiones para añadir, modificar y eliminar los Zapatos que hayas añadido
              </Container>
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
        if(username.current.value==="abc" && pssword.current.value==="abc"){
          handleClose()
          dispatch(cambiar(1))
          dispatch(logear({nombre:"Admin", id:"1"}))
        }
        else{
          alert("Usuario y/o Contraseña incorrecta para admin")
        }
    }else if(usuario==="Marca"){
      if(username.current.value==="abc" && pssword.current.value==="abc"){
        handleClose()
        dispatch(cambiar(1))
        dispatch(logear({nombre:"343", id:"3"}))
      }
      else{
        alert("Usuario y/o Contraseña incorrecta para distribuidor")
      }
  }else if(usuario==="Cliente"){
    if(username.current.value==="abc" && pssword.current.value==="abc"){
      handleClose()
      dispatch(cambiar(1))
      dispatch(logear({nombre:"Usuario", id:"2"}))
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
export function RegistrarMarca({ho, setHo}){
  const marcabanner = {
    maxHeight:"185px",
    minHeight:"185px",
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
  const [url, setUrl] = useState(pordef)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);
  const username = useRef()
  const pssword = useRef()
  const email = useRef()
  const confirmacion = useRef()
  const desc = useRef()
  checkImage(url)
  .then(validacion => {
    if (validacion) {
      setUrl(url)
    } else {
      setUrl(pordef)
    }
  })
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
        <Button className="mt-2" variant="." onMouseEnter={()=>setHo([false,false,false,true,false])} onMouseLeave={()=>setHo([false,false,false,false,false])} style={ho[3]?{color:"yellow", fontSize:"20px"}:{color:"white", fontSize:"20px"}} onClick={handleShow}><BsBuildingAdd/></Button>
        <Modal size="xl" show={show} onHide={handleClose}>
        <div style={formulario}>
          <Container>
              <Row>
                  <Col className="offset-1" md={2}>
                      <img style={loginicon} src={icono} alt="..."/>
                  </Col>
                  <Col>
                      <h2 style={titulogin}>Registrate como marca en KonShoes</h2>
                      <p style={{color:"white"}}>Al registrarte como una marca en KongShoes
                      puedes formar parte de las distribuidoras que proveen los mejores zapatos
                      con la mejor calidad a nuestra tienda, al unirte tendras acceso a tu propia bodega donde 
                      podras administrar tus productos, tambien le brindaras datos sobre tu marca al administrador(nombre, correo, ventas y productos) 
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
                              <Form.Label style={{color:"white"}}>Nombre de la marca</Form.Label>
                              <Form.Control ref={username} type="text" placeholder="Su marca" />
                          </Form.Group>
                      </Col>
                      <Col>
                          <Form.Group className="mb-3">
                              <Form.Label style={{color:"white"}}>Correo de la distribuidora</Form.Label>
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
export function Registrarse({ho, setHo}){
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
        <Button className="mt-2" variant="." onMouseEnter={()=>setHo([false,true,false,false,false])} onMouseLeave={()=>setHo([false,false,false,false,false])} style={ho[1]?{color:"yellow", fontSize:"20px"}:{color:"white", fontSize:"20px"}} onClick={handleShow}><FiUserPlus/></Button>
        <Modal size="lg" show={show} onHide={handleClose}>
        <div style={formulario}>
          <Container>
              <Row>
                  <Col md={3}>
                      <img style={loginicon} src={icono} alt="..."/>
                  </Col>
                  <Col>
                      <h2 style={titulogin}>Registrate como cliente en KonShoes</h2>
                      <p style={{color:"white"}}>Al registrarte como un cliente, formaras parte
                      de la creciente comudidad de KongShoes, Con los mejores precios y
                      calidad en calzado para todos los publicos, al registrarte como cliente, tendras
                      acceso a tu biblioteca donde se almacenaran los productos que compres,
                      tambien le brindaras datos sobre tu usuario al administrador(nombre, correo, y compras)
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
function checkImage(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    
    img.onload = () => {
      resolve(true);
    };

    img.onerror = () => {
      resolve(false);
    };

    img.src = url;
  });
}

