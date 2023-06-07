import { useSelector } from 'react-redux';
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
    width: "535px",
    height: "210px",
    overflow: "hidden",
    borderRadius: "30px",
    padding: "0",
    backgroundImage: "url("+banner+")",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
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
                        <MarcasLista nombre={"marca1"} desc={"texto descriptivos"}/>
                        <MarcasLista nombre={"marca2"} desc={"adsawd awdawda wd awd"}/>
                        <MarcasLista nombre={"marca3"} desc={"texto descriptivos"}/>
                        <MarcasLista nombre={"marca4"} desc={"adsawd awdawda wd awd"}/>
                        <MarcasLista nombre={"marca5"} desc={"texto descriptivos"}/>
                        <MarcasLista nombre={"marca6"} desc={"adsawd awdawda wd awd"}/>
                        <MarcasLista nombre={"marca7"} desc={"texto descriptivos"}/>
                        <MarcasLista nombre={"marca8"} desc={"adsawd awdawda wd awd"}/>
                        <MarcasLista nombre={"marca9"} desc={"texto descriptivos"}/>
                        <MarcasLista nombre={"marca10"} desc={"adsawd awdawda wd awd"}/>
                        <MarcasLista nombre={"marca11"} desc={"texto descriptivos"}/>
                        <MarcasLista nombre={"marca12"} desc={"adsawd awdawda wd awd"}/>
                        <MarcasLista nombre={"marca13"} desc={"texto descriptivos"}/>
                        <MarcasLista nombre={"marca14"} desc={"adsawd awdawda wd awd"}/>
                        <MarcasLista nombre={"marca15"} desc={"texto descriptivos"}/>
                        <MarcasLista nombre={"marca16"} desc={"adsawd awdawda wd awd"}/>
                        <MarcasLista nombre={"marca17"} desc={"texto descriptivos"}/>
                        <MarcasLista nombre={"marca18"} desc={"adsawd awdawda wd awd"}/>
                    </ListGroup>
                    </Col>
                    <Col md={9}>
                        <Row>
                            <Col>
                                <BannerStart/>
                            </Col>
                            <Col>
                                <Mejor tipo={"Ultimas Unidades"} url={ult}/>
                            </Col>
                        </Row>
                        <Row id="under">
                            <Col><Under tipo={"Mas vendidos"} url={nuevos}/></Col>
                            <Col><Under tipo={"Ultimos añadidos"} url={reciente}/></Col>
                            <Col><Under tipo={"v.i.p"} url={punt}/></Col> 
                        </Row>
                    </Col>
                </Row>
            </Container>
            </div>
        </div>
    )
}
function MarcasLista({nombre, desc}){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handlerShow = () =>{
        setShow(true)
    }
    return(
        <>
            <ListGroup.Item action onClick={handlerShow} >{nombre}</ListGroup.Item>
            <Modal size="lg" show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <h1 style={{color:"white"}}>{nombre}</h1>
                    </Modal.Header>
                    <p style={{color:"white"}}>{desc}</p>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
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
function Mejor({tipo, url}){
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
