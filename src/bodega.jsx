import React, { useRef, useState } from 'react';
import {  AdminNavBar, MarcaNavBar } from './navbar';
import { filtro, titulo, navStart } from './inicio';
import { ToastContainer, toast } from 'react-toastify';
import { useSelector} from 'react-redux';
import {checkImage} from './login'
import { useGet } from './hooks/useGet';

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import fondo from './assets/KsBodega.png';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import im from './assets/ksLogin.png'

import 'react-toastify/dist/ReactToastify.css';

const compra = {
    height: "480px",
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
    paddingTop: "10px",
    overflow: "hidden"
}
const marcabanner = {
    maxHeight:"150px",
    overflow: "hidden"
}
export function Bodega(){
    const {id, nombre} = useSelector((state)=>state.logeado)
    const {info, loading} = useGet("/shoes/ver")
    const get = useGet("/marca/traer/"+nombre)
    const bodegaStyle = {
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
                    <Row style={{marginTop: "10px",}}>
                        <Col md={7} style={{overflow: "scroll", scrollbarWidth: "none", height: "510px",}}>
                        {(id==="1")?<Row>
                                {loading? <h2>Cargando...</h2>:info.map(e=><Col>
                                    <Productos datos={e}/> 
                                </Col>)}
                            </Row>:<Row>
                                {get.loading? <h2>Cargando...</h2>:get.info.details.map(e=><Col>
                                    <Productos datos={e}/>
                                </Col>)}
                            </Row>}
                        </Col>
                        <Col>
                            <Admininfo id={id} get={get}/>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
function NavBodega(){
    const {id} = useSelector((state)=>state.logeado)
    if(id==="1"){
        return(
            <Navbar style={navStart}>
            <Container>
            <Navbar.Brand style={titulo}>KongShoes</Navbar.Brand>
            <AdminNavBar/>
            </Container>
        </Navbar>
        )
    }else if(id==="3"){
        return(
        <Navbar style={navStart}>
        <Container>
        <Navbar.Brand style={titulo}>KongShoes</Navbar.Brand>
        <MarcaNavBar/>
        </Container>
        </Navbar>
        )
    }
}
function Productos({datos}){
    return(
        <div style={compra}>
        <Row>
            <Col md={4}>
                <div style={cover}>
                    <img src={datos.foto} style={foto} alt='...'/>
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
                        <p>{datos.nombre}</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={3}>
                        <p>Marca:</p>
                    </Col>
                    <Col>
                        <p>{datos.Marca}</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={3}>
                        <p>Precio:</p>
                    </Col>
                    <Col>
                        <p>{datos.precio}</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={3}>
                        <p>ventas:</p>
                    </Col>
                    <Col>
                        <p>{datos.ventas}</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={3}>
                        <p>cantidad:</p>
                    </Col>
                    <Col>
                        <p>{datos.Cantidad}</p>
                    </Col>
                </Row>
                <Actualizar datos={datos} variant="primary">Editar</Actualizar>
            </Col>
        </Row>
    </div>
    )
}
function Actualizar({datos}){
  const [show, setShow] = useState(false);
  const [crg, setCrg] = useState(true)
  const [bn, setBn] = useState()
  const name = useRef()
  const cant = useRef()
  const price = useRef()
  const handleClose = () => setShow(false);
  const borrar =()=>{
    fetch("http://localhost:9000/api/shoes/borrar/"+datos._id, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(()=>toast.error('Se ha borrado el producto', {
    position: "bottom-right",
    autoClose: 2400,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "dark",
    }))
  }
  const handleShow = () => {
    setCrg(true)
    fetch("http://localhost:9000/api/marca/traer/"+datos.Marca)
    .then((d)=>d.json())
    .then((e)=>setBn(e.datos.banner))
    .finally(()=>setCrg(false))
    .catch((err)=>console.log(err))
    setShow(true)
  };
  const handlerDatos = () =>{
    let precio = parseFloat(price.current.value) 
    fetch("http://localhost:9000/api/shoes/actualizar/"+datos._id, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                "nombre":name.current.value,
                "Marca": datos.Marca,
                "foto":datos.foto,
                "puntacion": 0,
                "ventas": datos.ventas,
                "precio": precio,
                "Cantidad": cant.current.value,
                "Categoria": datos.Categoria
                
            }
        )
      })
        .then(response => response.json())
        .then((data)=>{
          console.log(data)
        }).finally(()=>{
            toast.info("Se ha actualizado el producto", {
                position: "bottom-right",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
          handleClose()
        })
  }
  return (
    <Row>
        <ToastContainer/>
        <ButtonGroup>
            <Button style={{width:"100px"}} variant="primary" onClick={handleShow}>Actualizar</Button>
            <Button style={{width:"100px"}} variant="danger" onClick={borrar}>Borrar</Button>
        </ButtonGroup>

      <Modal show={show} onHide={handleClose}>
        <h3 style={{color:"white", textAlign: "center"}}>Actualizar {datos.nombre}</h3>
        <Container className="mt-2">
        <Row style={marcabanner}>{crg? <img style={marcabanner} src={im} alt="..."/>:<img style={marcabanner} src={bn} alt="..."/>}</Row>
        <FloatingLabel label="Nombre de los zapatos" className="my-3">
            <Form.Control ref={name} defaultValue={datos.nombre} type="text" placeholder="Zapatos" />
        </FloatingLabel>

        <FloatingLabel label="Precio de los zapatos">
            <Form.Control ref={price} defaultValue={datos.precio} type="number" placeholder="precio" className="mb-3"/>
        </FloatingLabel>

        <FloatingLabel label="Cantidad a la venta">
            <Form.Control ref={cant} defaultValue={datos.Cantidad} type="number" placeholder="Cantidad" className="mb-3"/>
        </FloatingLabel>

        <Row>
            <ButtonGroup className="pb-2" vertical>
                <Button variant="info" onClick={handlerDatos}>Actualizar</Button>
                <Button variant="warning" onClick={handleClose}>Cancelar</Button>
            </ButtonGroup>
        </Row>
        </Container>
      </Modal>
    </Row>
  );
}
function Admininfo({id, get}){
    const {loading, info} = useGet("/admin/panel")
    if(id==="1"){
        return(
            <div style={panel}>
                <h1 style={{textAlign: "center", marginBottom: "25px"}}>Panel de Informacion</h1>
                <Container>
                <Row>
                    {loading ? <h2>Cargando...</h2>:<Col>
                        <Row>
                            <Col md={6}>
                                <p>Total de productos:</p>
                            </Col>
                            <Col>
                                <p>{info.totalProductos}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <p>Ventas Generales:</p>
                            </Col>
                            <Col>
                                <p>{info.totalVentas}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <p>Marca con mas ventas:</p>
                            </Col>
                            <Col>
                                <p>{info.marcaMasVendida}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <p>Producto mas vendido:</p>
                            </Col>
                            <Col>
                                <p>{info.zapatoMasVendido}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <p>Promedio de ventas por zapato:</p>
                            </Col>
                            <Col>
                                <p>{info.promzapatos}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <p>Total de Usuarios:</p>
                            </Col>
                            <Col>
                                <p>{info.totalUsuario}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <p>Promedio de compras por usuario:</p>
                            </Col>
                            <Col>
                                <p>{info.promusuarios}</p>
                            </Col>
                        </Row>
                        <Agg/>
                    </Col>}
                </Row>
                </Container>
            </div>
        )
    }else if(id==="3"){
        return(
            <div style={panel}>
                <h1 style={{textAlign: "center", marginBottom: "25px"}}>Panel de Informacion</h1>
                <Container>
                <Row>
                    {get.loading ? <h2>Cargando...</h2>:<Col>
                        <Row>
                            <Col md={6}>
                                <p>nombre de la marca:</p>
                            </Col>
                            <Col>
                                <p>{get.info.datos.nombre}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <p>Correo:</p>
                            </Col>
                            <Col>
                                <p>{get.info.datos.correo}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <p>Total de productos:</p>
                            </Col>
                            <Col>
                                <p>{get.info.datos.productos.length}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <p>Ventas Generales:</p>
                            </Col>
                            <Col>
                                <p>{get.info.datos.ventas.length}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <p>Producto mas vendido:</p>
                            </Col>
                            <Col>
                                <p>{(get.info.details[0]===undefined)?"no hay productos":get.info.details[0].nombre}</p>
                            </Col>
                        </Row>
                        <Row>
                            <p style={{textAlign: "center"}}>Banner de {get.info.datos.nombre}</p>
                        </Row>
                        <Row className="mb-3" style={{width:"90%", height: "120px", overflow: "hidden", marginLeft: "20px"}}>
                            <img style={{minWidth:"100%", minHeight: "120px", maxWidth:"100%", maxHeight: "120px"}} src={get.info.datos.banner} alt="..." />
                        </Row>
                        <Peticion datos={get.info.datos}/>
                    </Col>}
                </Row>
                </Container>
            </div>
        )
    }
}
function Agg(){
  const [show, setShow] = useState(false);
  const [vent, setVent] = useState(false);
  const [petload, setPetload] = useState(true)
  const [pet, setPet] = useState(true)
  const marnom = useSelector((state)=>state.logeado.nombre) 
  const name = useRef()
  const precio = useRef()
  const cantidad = useRef()
  const foto = useRef()
  const handleClose = () => setShow(false);
  const handlevent = () => {
    setPetload(true)
    setVent(true);
    fetch("http://localhost:9000/api/peticiones/ver")
    .then((data)=>data.json())
    .then((info)=>setPet(info))
    .finally(()=>setPetload(false))
    }
  const handleCerrar = () => setVent(false);
  const handleShow = () => setShow(true);
  const handlerDatos = ()=>{
    if(name.current.value!=="" && cantidad.current.value!=="" && precio.current.value!=="" && foto.current.value!==""){
        checkImage(foto.current.value)
        .then((va)=>{
            if(va){
                let cant = parseFloat(cantidad.current.value)
                let prec =  parseFloat(precio.current.value)
                let recuperado = {
                        nombre:name.current.value,
                        Marca: marnom,
                        foto:foto.current.value,
                        puntacion: 0,
                        ventas: 0,
                        precio: prec,
                        Cantidad: cant,
                        Categoria:["zapatos"] 
                }
                fetch("http://localhost:9000/api/shoes/crear", {
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(recuperado)
                })
                    .then(response => response.json())
                    .finally(()=>{
                        toast.info("Se ha Creado el producto", {
                            position: "bottom-right",
                            autoClose: 2500,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: false,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                            });
                        handleClose()
                    })
                    }else{
                        toast.error("Imagen no valida", {
                            position: "bottom-right",
                            autoClose: 2500,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: false,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                            });
                    }
                })
    }else{
        alert("Llene todos los campos")
    }
  }
  return (
    <Row>
        <ToastContainer/>
        <ButtonGroup>
            <Button variant="primary" onClick={handleShow}>Agregar</Button>
            <Button variant="info" onClick={handlevent}>Peticiones</Button>
        </ButtonGroup>

      <Modal show={show} onHide={handleClose}>
        <h1 style={{color:"white", textAlign: "center"}}>Añadir zapatos</h1>
        <Container className="mt-2">
        <Row style={marcabanner}><img style={marcabanner} src={im} alt="..."/></Row>
        <FloatingLabel label="Nombre de los zapatos" className="my-3">
            <Form.Control ref={name} type="text" placeholder="Zapatos" />
        </FloatingLabel>

        <FloatingLabel label="Precio de los zapatos">
            <Form.Control ref={precio} min={0} type="number" placeholder="precio" className="mb-3"/>
        </FloatingLabel>

        <FloatingLabel label="Cantidad a la venta">
            <Form.Control ref={cantidad} min={0} type="number" placeholder="Cantidad" className="mb-3"/>
        </FloatingLabel>

        <FloatingLabel label="foto del zapato">
            <Form.Control ref={foto} type="text" placeholder="fotoDelZapato.png" className="mb-3"/>
        </FloatingLabel>
        <Row>
            <ButtonGroup className="pb-2" vertical>
                <Button variant="info" onClick={handlerDatos}>Añadir</Button>
                <Button variant="warning" onClick={handleClose}>Cancelar</Button>
            </ButtonGroup>
        </Row>
        </Container>
      </Modal>

      <Modal size="lg" show={vent} onHide={handleCerrar}>
        <Modal.Header closeButton><h1 style={{color:"white", textAlign: "center"}}>Peticiones</h1></Modal.Header>
        <Container className="mt-2"  style={{height: "490px", overflowY: "scroll", boderRadius: "50px"}}>
            {petload?<h1>Cargando...</h1>:pet.map(e=><ListaPeticiones cerrar={handleCerrar} datos={e}/>)}
        </Container>
      </Modal>
    </Row>
  );
}
function Peticion({datos}){
  const [show, setShow] = useState(false);
  const name = useRef()
  const precio = useRef()
  const cantidad = useRef()
  const foto = useRef()
  const handlerDatos = ()=>{
    if(name.current.value!=="" && cantidad.current.value!=="" && precio.current.value!=="" && foto.current.value!==""){
        checkImage(foto.current.value)
        .then((va)=>{
            if(va){
                let cant = parseFloat(cantidad.current.value)
                let prec =  parseFloat(precio.current.value)
                let recuperado = {
                        nombre:name.current.value,
                        Marca: datos.nombre,
                        foto:foto.current.value,
                        puntacion: 0,
                        ventas: 0,
                        precio: prec,
                        Cantidad: cant,
                        Categoria:["zapatos"] 
                }
                fetch("http://localhost:9000/api/peticiones/crear", {
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(recuperado)
                })
                    .then(response => response.json())
                    .finally(()=>{
                        toast.info("Se ha Creado la peticion", {
                            position: "bottom-right",
                            autoClose: 2500,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: false,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                            });
                        handleClose()
                    })
                    }else{
                        toast.error("imagen invalida", {
                            position: "bottom-right",
                            autoClose: 2500,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: false,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                            });
                    }
                })
    }else{
        alert("Llene todos los campos")
    }
  }
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <Row>
        <ToastContainer/>
        <Button variant="primary" onClick={handleShow}>Agregar</Button>
      <Modal show={show} onHide={handleClose}>
        <h1 style={{color:"white", textAlign: "center"}}>Añadir peticion</h1>
        <Container className="mt-2">
        <Row style={marcabanner}><img style={marcabanner} src={datos.banner} alt="..."/></Row>

        <FloatingLabel label="Nombre de los zapatos" className="my-3">
            <Form.Control ref={name} type="text" placeholder="Zapatos" />
        </FloatingLabel>

        <FloatingLabel label="Precio de los zapatos">
            <Form.Control ref={precio} min={0} type="number" placeholder="precio" className="mb-3"/>
        </FloatingLabel>

        <FloatingLabel label="Cantidad a la venta">
            <Form.Control ref={cantidad} min={0} type="number" placeholder="Cantidad" className="mb-3"/>
        </FloatingLabel>

        <FloatingLabel label="foto del zapato">
            <Form.Control ref={foto} type="text" placeholder="fotoDelZapato.png" className="mb-3"/>
        </FloatingLabel>

        <Row>
            <ButtonGroup className="pb-2" vertical>
                <Button variant="info" onClick={handlerDatos}>Añadir</Button>
                <Button variant="warning" onClick={handleClose}>Cancelar</Button>
            </ButtonGroup>
        </Row>
        </Container>
      </Modal>
    </Row>
  );
}
function ListaPeticiones({datos, cerrar}){
    const pet = {
        height: "200px",
        width: "750px",
        margin: "20px 0px",
        backgroundColor: "rgba(30, 33, 36, 1)",
        color: "white",
        borderRadius: "30px",
        overflow: "hidden",
        transition: "1s ease all"
    }
    const petfoto = {
        paddingLeft: "10px",
        minHeight: "200px",
        minWidth: "250px",
        maxHeight: "200px",
        maxWidth: "250px",
    }
    const aceptar = ()=>{
        fetch("http://localhost:9000/api/peticiones/aceptar/"+datos._id)
        .then(()=>toast.info("Se ha Creado el producto", {
            position: "bottom-right",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
            }))
        cerrar()
    }
    const rechazar = ()=>{
        fetch("http://localhost:9000/api/peticiones/rechazar/"+datos._id, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
                }
        })
        .then(()=>toast.info("Se ha rechazado el producto", {
            position: "bottom-right",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
            }))
        cerrar()
    }
    return(
        <div style={pet}>
        <ToastContainer/>
            <Row>
                <Col style={{padding:"0", marginRight: "10px"}} md={4}>
                    <div style={cover}>
                        <img src={datos.foto} style={petfoto} alt='...'/>
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
                                <Col><p>{datos.Marca} </p></Col>
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <Col md={4}><p>Cantidad</p></Col>
                                <Col><p>{datos.Cantidad}</p></Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row style={{marginTop:"20px", paddingRight:"10px"}}>
                        <ButtonGroup aria-label="Basic example">
                            <Button onClick={aceptar} variant="success">Aceptar</Button>
                            <Button onClick={rechazar}variant="danger">rechazar</Button>
                        </ButtonGroup>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}