import { useSelector, useDispatch } from 'react-redux';
import { useState, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import fondo from './assets/mgs.jpg';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Card from 'react-bootstrap/Card';
import { filtro } from './inicio';
import Select from 'react-select';
import Nav from 'react-bootstrap/Nav';
import { navStart } from './inicio';
import { cambiar } from "./redux/mostrarslice";
import { deslogear } from './redux/usuarioSlice';
import { titulo } from './inicio';
import './CSS/tienda.css';

const tarjetas = {
    maxWidth: "200px",
    minWidth: "200px",
    maxHeight: "300px",
    minHeight: "300px",
    overflow: "hidden",
    marginBottom: "20px",
    backgroundColor: "rgba(33, 37, 41, 0.7)",
    cursor: "pointer"
}
const jnombre = {
    fontSize: "17px",
    color: "white",
    maxWidth: "200px",
    minWidth: "200px",
    margin: "0",
    textAlign: "center"
}
const jzona = {
    height: "500px",
    overflow: "scroll",
    scrollbarWidth: "none",
    margin: "20px 0px",
    padding: "0 0 0 40px"
}
const cover = {
    maxWidth: "200px",
    minWidth: "200px",
    maxHeight: "255px",
    minHeight: "255px",
}
const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
export function Tienda(){
    const [busqueda, setBusqueda] = useState("Todos")
    const a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    const {mostrar} = useSelector((state)=>state.mostrando)
    const storeStyle = {
        display: mostrar[2],
        width: "100vw", 
        height: "100vh",
        backgroundImage: "url("+fondo+")",
        backgroundSize: "100%",
    }
    return(
        <div className="tienda" style={storeStyle}>
            <div style={filtro}>
                <Container>
                    <StoreNavBar busqueda={setBusqueda} />
                        <Col>
                        <div style={jzona}>
                            <Row>
                                {a.map((e,i)=>(
                                    <Juegos key={i} enmuestra={busqueda} />
                                ))}
                            </Row>
                        </div>
                        </Col>
                </Container>
            </div>
        </div>
    )
}

//Barra de Navegacion
function StoreNavBar({busqueda}){
    const [filtrados, setFiltrados] = useState({})
    const dispatch = useDispatch()
    const {id} = useSelector((state)=>state.logeado)
    const buscar=(e)=>{
        busqueda(e.value)
    }
    console.log(filtrados)
    if(id==="2"){
        return(
            <Navbar style={navStart}>
            <Container>
            <Navbar.Brand style={titulo}>KongGames</Navbar.Brand>
            <Nav>
                <Nav.Link style={{width:"300px" }}><Select onChange={buscar} options={options} /></Nav.Link>
                <Nav.Link><Jfiltros filtros={setFiltrados}/></Nav.Link>
            </Nav>
            <Nav className="d-flex">
                <Nav.Link><Button variant="danger" onClick={()=>{dispatch(cambiar(0));dispatch(deslogear())}}>Cerrar sesion</Button></Nav.Link>
                <Nav.Link><Button variant="warning" onClick={()=>dispatch(cambiar(2))}>Tienda</Button></Nav.Link>
                <Nav.Link><Button variant="primary" onClick={()=>dispatch(cambiar(2))}>Biblioteca</Button></Nav.Link>
                <Nav.Link><Button variant="light" onClick={()=>dispatch(cambiar(4))}>Carrito</Button></Nav.Link>
            </Nav>
            </Container>
        </Navbar>
        )
    }
    else if(id==="1"){
        return(
            <Navbar style={navStart}>
            <Container>
            <Navbar.Brand style={titulo}>KongGames</Navbar.Brand>
            <Nav>
                <Nav.Link style={{width:"400px" }}><Select onChange={buscar} options={options} /></Nav.Link>
                <Nav.Link><Jfiltros filtros={setFiltrados}/></Nav.Link>
            </Nav>
            <Nav className="d-flex">
                <Nav.Link><Button variant="danger" onClick={()=>{dispatch(cambiar(0));dispatch(deslogear())}}>Cerrar sesion</Button></Nav.Link>
                <Nav.Link><Button variant="warning" onClick={()=>dispatch(cambiar(2))}>Tienda</Button></Nav.Link>
                <Nav.Link><Button variant="primary" onClick={()=>dispatch(cambiar(3))}>Bodega</Button></Nav.Link>
                <Nav.Link><Button variant="primary" onClick={()=>dispatch(cambiar(3))}>Usuarios</Button></Nav.Link>
            </Nav>
            </Container>
        </Navbar>
        )
    }else if(id==="3"){
        return(
        <Navbar style={navStart}>
        <Container>
        <Navbar.Brand style={titulo}>KongGames</Navbar.Brand>
        <Nav>
            <Nav.Link style={{width:"400px" }}><Select onChange={buscar} options={options} /></Nav.Link>
            <Nav.Link><Jfiltros filtros={setFiltrados}/></Nav.Link>    
        </Nav>
        
        <Nav className="d-flex">
            <Nav.Link><Button variant="danger" onClick={()=>{dispatch(cambiar(0));dispatch(deslogear())}}>Cerrar sesion</Button></Nav.Link>
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
            <Navbar.Brand style={titulo}>KongGames</Navbar.Brand>
            <Nav>
                <Nav.Link style={{width:"400px" }}><Select onChange={buscar} options={options} /></Nav.Link>
                <Nav.Link><Jfiltros filtros={setFiltrados}/></Nav.Link>
            </Nav>
            <Nav className="d-flex">
                <Nav.Link><Button variant="danger" onClick={()=>dispatch(cambiar(0))}>Iniciar Sesion</Button></Nav.Link>
                <Nav.Link><Button variant="warning" onClick={()=>dispatch(cambiar(0))}>Registrarse</Button></Nav.Link>
            </Nav>
            </Container>
        </Navbar>
        )
    }
}
function Juegos({enmuestra}){
    const [compra, setCompra] = useState(false)
    const carrito = "https://cdn.mobygames.com/268e90f0-aba2-11ed-bd13-02420a00019c.webp"
    const userHover = () =>{
        setCompra(true)
    }
    const noUserHover = () =>{
        setCompra(false)
    }
    return(
        <Col md={3}>
            <Card style={tarjetas} onMouseEnter={userHover} onMouseLeave={noUserHover} className='tarjeta'>
            <Card.Img style={cover} variant="top" src={compra? carrito:"https://upload.wikimedia.org/wikipedia/en/b/b4/Halo_3_final_boxshot.JPG"} />
            <Card.Body>
              <Card.Title style={jnombre} >The legend of zelda tears of the Kingdom</Card.Title>
            </Card.Body>
          </Card>
        </Col>
    )
}
function Jfiltros({filtros}){
    const [show, setShow] = useState(false);
    const [Rprecio, setRprecio] = useState(0);
    const [Rpunt, setRpunt] = useState(0);

    const distri = useRef();
    const gen = useRef();
    const platf = useRef();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handlerprecio = ({target}) => setRprecio(target.value)
    const handlerpunt = ({target}) => setRpunt(target.value)
    const handlerDatos = () =>{
        var filgen = gen.current.state.selectValue.map((e)=>(e.value))
        var filptf = platf.current.state.selectValue.map((e)=>(e.value))
        filtros({
            distribuidor: distri.current.state.selectValue[0].value,
            generos: filgen,
            plataformas: filptf,
            puntuacion: Rpunt,
            precio: Rprecio
        })
    }
    const generos = [
        {value: "accion", label: "Accion"},
        {value: "Terror", label: "Terror"},
        {value: "Deporte", label: "Deporte"},
        {value: "Conduccion", label: "Conduccion"}]
    const distribuidores = [
            {value: "Bethesda", label: "Bethesda"},
            {value: "Devolver", label: "Devolver"},
            {value: "FromSoftware", label: "FromSoftware"},
            {value: "RockStar", label: "RockStar"}]
    const plataformas = [
                {value: "ps4", label: "PlayStation 4"},
                {value: "xone", label: "Xbox One"},
                {value: "series", label: "Xbox Series S/X"},
                {value: "ps5", label: "PlayStation 5"}]
    return(
        <div>
        <Button variant="info" onClick={handleShow}>Ver filtros</Button>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="otro">Filtrar Busqueda de videojuegos</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Form>
            <Form.Group className="mb-3">
                <Select className='my-4' ref={distri} placeholder="Distribuidores" isClearable={true} options={distribuidores}/>
                <Select className='mb-4' ref={gen} placeholder="Generos" isMulti options={generos}/>
                <Select className='mb-4' ref={platf} placeholder="Plataformas" isMulti options={plataformas}/>
                <Form.Label className="otro">Rango de precio: {Rprecio} </Form.Label>
                <Form.Range defaultValue={Rprecio} min={10} max={150} onChange={handlerprecio}/>
                <Form.Label className='otro my-4'>Rango de puntuacion: {Rpunt}</Form.Label>
                <Form.Range defaultValue={Rpunt} min={1} max={5} onChange={handlerpunt}/>
            </Form.Group>
      <Button variant="light" className='my-4' onClick={handlerDatos}>Aplicar Filtros</Button>
    </Form>
        </Offcanvas.Body>
      </Offcanvas>
        </div>
    )
}
