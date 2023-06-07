import { useSelector, useDispatch } from 'react-redux';
import { useState, useRef } from 'react';
import { filtro, titulo, navStart } from './inicio';
import { add } from './redux/carritoslice';
import { UserNavBar, AdminNavBar, MarcaNavBar, NoUserNavBar } from './navbar';
import Container from 'react-bootstrap/Container';
import fondo from './assets/KsTienda.png';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Card from 'react-bootstrap/Card';
import Select from 'react-select';
import Nav from 'react-bootstrap/Nav';
import './CSS/tienda.css';
import shoes from "./assets/imagen-6.png"
import carrito from "./assets/agg.jpg"
const tarjetas = {
    maxWidth: "280px",
    minWidth: "280px",
    maxHeight: "265px",
    minHeight: "265px",
    overflow: "hidden",
    marginBottom: "20px",
    backgroundColor: "rgba(33, 37, 41, 0.7)",
    cursor: "pointer"
}
const jnombre = {
    fontSize: "15px",
    color: "white",
    maxWidth: "280px",
    minWidth: "280px",
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
    maxWidth: "280px",
    minWidth: "280px",
    maxHeight: "240px",
    minHeight: "240px",
}
const options = [
    { value: 'chocolate', label: 'Zapatos 1' },
    { value: 'strawberry', label: 'Zapatos 2' },
    { value: 'vanilla', label: 'Zapatos 3' }
  ]
export const categorias = [
    {value: "deportivos", label: "deportivos"},
    {value: "botas", label: "botas"},
    {value: "infantiles", label: "infantiles"},
    {value: "elegantes", label: "elegantes"},
    {value: "casuales", label: "casuales"},
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
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
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
                                    <Col>
                                        <Juegos key={i+"juegos"} enmuestra={busqueda} iu={i}/>
                                    </Col>
                                ))}
                            </Row>
                        </div>
                        </Col>
                </Container>
            </div>
        </div>
    )
}


function StoreNavBar({busqueda}){
    const [filtrados, setFiltrados] = useState({})
    const {id} = useSelector((state)=>state.logeado)
    const buscar=(e)=>{
        busqueda(e.value)
    }
    console.log(filtrados)
    if(id==="2"){
        return(
            <Navbar style={navStart}>
            <Container>
            <Navbar.Brand style={titulo}>KongShoes</Navbar.Brand>
            <Nav>
                <Nav.Link style={{width:"300px" }}><Select onChange={buscar} options={options} /></Nav.Link>
                <Nav.Link><Jfiltros filtros={setFiltrados}/></Nav.Link>
            </Nav>
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
            <Nav>
                <Nav.Link style={{width:"400px" }}><Select onChange={buscar} options={options} /></Nav.Link>
                <Nav.Link><Jfiltros filtros={setFiltrados}/></Nav.Link>
            </Nav>
            <AdminNavBar/>
            </Container>
        </Navbar>
        )
    }else if(id==="3"){
        return(
        <Navbar style={navStart}>
        <Container>
        <Navbar.Brand style={titulo}>KongShoes</Navbar.Brand>
        <Nav>
            <Nav.Link style={{width:"400px" }}><Select onChange={buscar} options={options} /></Nav.Link>
            <Nav.Link><Jfiltros filtros={setFiltrados}/></Nav.Link>    
        </Nav>
        <MarcaNavBar/>
        </Container>
        </Navbar>
        )
    }else{
        return(
            <Navbar style={navStart}>
            <Container>
            <Navbar.Brand style={titulo}>KongShoes</Navbar.Brand>
            <Nav>
                <Nav.Link style={{width:"400px" }}><Select onChange={buscar} options={options} /></Nav.Link>
                <Nav.Link><Jfiltros filtros={setFiltrados}/></Nav.Link>
            </Nav>
            <NoUserNavBar/>
            </Container>
        </Navbar>
        )
    }
}
function Juegos({iu}){
    const [compra, setCompra] = useState(false)
    const dispatch = useDispatch()
    const userHover = () =>{
        setCompra(true)
    }
    const noUserHover = () =>{
        setCompra(false)
    }
    const agg = () =>{
         dispatch(add(iu))
    }
    return(
        <Col md={3}>
            <Card style={tarjetas} onMouseEnter={userHover} onMouseLeave={noUserHover} onClick={agg} className='tarjeta'>
            <Card.Img style={cover} variant="top" src={compra? carrito:shoes} />
            <Card.Body>
              <Card.Title style={jnombre}>nombre de los Zapatos</Card.Title>
            </Card.Body>
          </Card>
        </Col>
    )
}
function Jfiltros({filtros}){
    const [show, setShow] = useState(false);
    const [Rprecio, setRprecio] = useState(0);

    const distri = useRef(null);
    const cat = useRef(null);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handlerprecio = ({target}) => setRprecio(target.value)
    console.log(distri)
    const handlerDatos = () =>{
        console.log(distri.current)
        var filcat;
        var fildist;
        if((distri!=null)&&(cat!=null)){
        filcat = cat.current.state.selectValue.map((e)=>(e.value))
        fildist = distri.current.state.selectValue.map((e)=>(e.value))
        filtros({
            Marcas: fildist,
            categorias: filcat,
            precio: Rprecio
        })
        }else if(distri!=null){
            fildist = distri.current.state.selectValue.map((e)=>(e.value))
            filtros({
                Marcas: fildist,
                categorias: [],
                precio: Rprecio
            })
        }else if(cat!=null){
            filcat = cat.current.state.selectValue.map((e)=>(e.value))
            filtros({
                Marcas: "ninguna",
                categorias: filcat,
                precio: Rprecio
            })
        }else{
            filtros({
                Marcas: "ninguna",
                categorias: [],
                precio: Rprecio
            })
        }
    }

    const distribuidores = [
            {value: "Bethesda", label: "marca 1"},
            {value: "Devolver", label: "marca 2"},
            {value: "FromSoftware", label: "marca 3"},
            {value: "RockStar", label: "marca 4"}]
    return(
        <div>
        <Button variant="info" onClick={handleShow}>Ver filtros</Button>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="otro">Filtrar Busqueda de zapatos</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Form>
            <Form.Group className="mb-3">
                <Select className='my-4' ref={distri} placeholder="Marcas" isClearable={true} options={distribuidores}/>
                <Select className='mb-4' ref={cat} placeholder="categorias" isMulti options={categorias}/>
                <Form.Label className="otro">Rango de precio: {Rprecio} </Form.Label>
                <Form.Range defaultValue={Rprecio} min={10} max={150} onChange={handlerprecio}/>
            </Form.Group>
      <Button variant="light" className='my-4' onClick={handlerDatos}>Aplicar Filtros</Button>
    </Form>
        </Offcanvas.Body>
      </Offcanvas>
        </div>
    )
}
