import { useSelector } from 'react-redux';
import { Juegos } from './tienda';
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import { UserNavBar, AdminNavBar, MarcaNavBar, NoUserNavBar } from './navbar';


import reciente from './assets/kgunder.png';
import ult from './assets/kgunder3.png';
import punt from './assets/kgunder4.png';
import nuevos from './assets/kgunder2.png';
import fondo from './assets/ksInicio.png';
import banner from './assets/kgMarca.png';

import {useGet} from "./hooks/useGet"
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
const bannerName = {
    backgroundColor: "rgba(21,25,30,0.7)",
    color: "white",
    width: "535px", 
    height: "210px",
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
    width: "535px", 
    height: "210px",
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
    width: "250px",
    height: "250px",
    transition: "opacity 0.3s, padding 0.35s ease",
    
}
const underFiltroff = {
    backgroundColor: "rgba(21,25,30,0.7)",
    width: "250px",
    height: "250px",
    paddingTop: "80px",
    opacity: "0",
    transition: "opacity 0.3s, padding 0.35s ease",
    cursor: "pointer",
}
const valoradoFiltro = {
    backgroundColor: "rgba(21,25,30,0.7)",
    width: "240px",
    height: "210px",
    opacity: "1",
    transition: "opacity 0.3s, padding 0.35s ease",
    cursor: "pointer",
    textAlign: "center",
    color: "white"
}
const valoradoFiltroff = {
    backgroundColor: "rgba(21,25,30,0.7)",
    width: "240px",
    height: "210px",
    opacity: "0",
    transition: "opacity 0.3s, padding 0.35s ease",
    cursor: "pointer",
    textAlign: "center",
    color: "white",
    paddingLeft: "200px"
}
export function Inicio(){
    const {info, loading} = useGet("/marca/nombres")
    if(loading){
    console.log("cargando...")
    }else{
    console.log(info)
    }
    const get = useGet("/shoes/datos")
    const startStyle = {
        width: "100vw", 
        height: "100vh",
        backgroundImage: "url("+fondo+")",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    }  
    return(
        <div className="inicio" style={startStyle}>
            <div style={filtro}>
            <Container>
                <NavStart/>
                <Row style={{marginTop: "30px",}}>
                    <Col md={3}>
                    <ListGroup variant="flush" style={distList}>
                        {loading ? <h1>cargando</h1>:info.nombres.map(e=><MarcasLista nombre={e}/>)}
                    </ListGroup>
                    </Col>
                    <Col md={9}>
                        <Row>
                            <Col>
                                <BannerStart crg={loading} inf={info}/>
                            </Col>
                            <Col>
                                <Mejor tipo={"Ultimas Unidades"} url={ult} datos={get}/>
                            </Col>
                        </Row>
                        <Row id="under">
                            <Col><Under tipo={"Mas vendidos"} url={nuevos} datos={get}/></Col>
                            <Col><Under tipo={"Ultimos añadidos"} url={reciente} datos={get}/></Col>
                            <Col><Under tipo={"v.i.p"} url={punt} datos={get}/></Col> 
                        </Row>
                    </Col>
                </Row>
            </Container>
            </div>
        </div>
    )
}
function MarcasLista({nombre}){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handlerShow = () =>{
        fetch("http://localhost:9000/api/marca/traer/"+nombre)
        .then((data)=>data.json())
        .then((info)=>console.log(info.details))
        setShow(true)
    }
    return(
        <>
            <ListGroup.Item action onClick={handlerShow} >{nombre}</ListGroup.Item>
            <Modal size="xl" show={show} onHide={handleClose} style={{height: "625px", overflow: "hidden", boderRadius: "50px"}}>
                <Modaldatos handleClose={handleClose} titulo={nombre}/>
            </Modal>
        </>
    )
}
function NavStart(){
    const {id} = useSelector((state)=>state.logeado)
    if(id==="2"){
        return(
            <Navbar style={navStart}>
            <Container>
            <Navbar.Brand style={titulo}>KongShoes</Navbar.Brand>
            <UserNavBar/>
            </Container>
        </Navbar>
        )
    }
    else if(id==="1"){
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
    }else{
        return(
            <Navbar style={navStart}>
            <Container>
            <Navbar.Brand style={titulo}>KongShoes</Navbar.Brand>
            <NoUserNavBar/>
            </Container>
        </Navbar>
        )
    }
}
function Modaldatos({handleClose, titulo}){
    return(
        <>
             <Modal.Header closeButton>
                    <h1 style={{color:"white"}}>{titulo}</h1>
                    </Modal.Header>
                    <p style={{color:"white"}}>descripcion</p>
                    <Container  style={{marginLeft: "30px", height: "600px", overflow: "scroll"}} >
                    <Row>
                        <Col md={4}>
                            <Juegos iu={5} />
                        </Col>
                        <Col md={4}>
                            <Juegos iu={5} />
                        </Col>
                        <Col md={4}>
                            <Juegos iu={5} />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}>
                            <Juegos iu={5} />
                        </Col>
                        <Col md={4}>
                            <Juegos iu={5} />
                        </Col>
                        <Col md={4}>
                            <Juegos iu={5} />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}>
                            <Juegos iu={5} />
                        </Col>
                        <Col md={4}>
                            <Juegos iu={5} />
                        </Col>
                        <Col md={4}>
                            <Juegos iu={5} />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}>
                            <Juegos iu={5} />
                        </Col>
                        <Col md={4}>
                            <Juegos iu={5} />
                        </Col>
                        <Col md={4}>
                            <Juegos iu={5} />
                        </Col>
                    </Row>
                    </Container>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
        </>
    )
}
function BannerStart({crg, inf}){
    var bnr = banner
    if(!crg)bnr = inf.banner[2]
    const contBanner = {
        width: "535px",
        height: "210px",
        overflow: "hidden",
        borderRadius: "30px",
        padding: "0",
        backgroundImage: "url("+bnr+")",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    }
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
            {crg ? <h1>Cargando</h1>:<>
                <div onClick={handlerShow} onMouseEnter={userHover} onMouseLeave={noUserHover} style={hover? bannerName: bannerOff}>
                <p>Marca: {inf.nombres[2]}</p>
            </div>
            <Modal size="xl" show={show} onHide={handleClose} style={{height: "625px", overflow: "hidden", boderRadius: "50px"}}>
                <Modaldatos handleClose={handleClose} titulo={"KongGames"}/>
            </Modal>
            </>}
        </div>
    )
}
function Under({tipo, url, datos}){
    const cover = {
        marginTop: "25px",
        width: "250px",
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
        if(datos.loading){
            console.log("Cargando Papu")
        }
        else{
            if(tipo==="Mas vendidos")console.log(datos.info.mejores)
            if(tipo==="Ultimos añadidos")console.log(datos.info.ultimos)
            if(tipo==="v.i.p")console.log(datos.info.precios)
        }
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
            <Modal size="xl" show={show} onHide={handleClose} style={{height: "625px", overflow: "hidden", boderRadius: "50px"}}>
                <Modaldatos handleClose={handleClose} titulo={tipo}/>
            </Modal>
        </div>
    )
}
function Mejor({tipo, url, datos}){
    const [hover, setHover] = useState(false)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handlerShow = () =>{
        if(datos.loading){
            console.log("Cargando Papu")
        }
        else{
            console.log(datos.info.unidades)
        }
        setShow(true)
    }
    const userHover=()=>{
        setHover(true)
    }
    const noUserHover=()=>{
        setHover(false)
    }
    const valorado = {
        width: "240px",
        height: "210px",
        borderRadius: "30px",
        marginBottom: "10px",
        backgroundImage: "url("+url+")",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        cursor: "pointer",
        overflow: "hidden"
    }
    return(
        <div style={valorado}>
            <div onClick={handlerShow} onMouseEnter={userHover} onMouseLeave={noUserHover} style={hover? valoradoFiltro:valoradoFiltroff}>
                <p>{tipo}</p>
            </div>
            <Modal size="xl" show={show} onHide={handleClose} style={{height: "625px", overflow: "hidden", boderRadius: "50px"}}>
                <Modaldatos handleClose={handleClose} titulo={tipo}/>
            </Modal>
        </div>
    )
}
