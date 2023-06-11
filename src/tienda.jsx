import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { filtro, titulo, navStart } from './inicio';
import { add } from './redux/carritoslice';
import { UserNavBar, AdminNavBar, MarcaNavBar, NoUserNavBar } from './navbar';
import Container from 'react-bootstrap/Container';
import fondo from './assets/KsTienda.png';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Select from 'react-select';
import Nav from 'react-bootstrap/Nav';
import './CSS/tienda.css';
import carrito from "./assets/agg.jpg"
import { usePost } from './hooks/usePost'
import { useGet } from './hooks/useGet';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const tarjetas = {
    maxWidth: "280px",
    minWidth: "280px",
    maxHeight: "270px",
    minHeight: "270px",
    overflow: "hidden",
    marginBottom: "20px",
    backgroundColor: "rgba(33, 37, 41, 0.7)",
    cursor: "pointer"
}
const jnombre = {
    fontSize: "15px",
    color: "white",
    maxWidth: "200px",
    minWidth: "200px",
    margin: "0",
    textAlign: "center"
}
const jprecio = {
    fontSize: "14px",
    color: "white",
    maxWidth: "80px",
    minWidth: "80px",
    margin: "0 30px",
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
export const categorias = [
    {value: "deportivos", label: "deportivos"},
    {value: "botas", label: "botas"},
    {value: "infantiles", label: "infantiles"},
    {value: "elegantes", label: "elegantes"},
    {value: "casuales", label: "casuales"},
]
export function Tienda(){
    const [busqueda, setBusqueda] = useState({
        "Marca": null,
        "Categoria":null,
        "precio": null,  
    })
    const {info, loading} = usePost(busqueda)
    const get = useGet("/shoes/nombres")
    const storeStyle = {
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
                    <StoreNavBar dt={get} busqueda={setBusqueda} />
                        <Col>
                        <div style={jzona}>
                            <Row>
                                {loading ? <h1>Cargando</h1>:info.map((e, i)=>(
                                    <Col md={4}>
                                        <Juegos key={i+e.nombre} info={e} />
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


function StoreNavBar({ busqueda, dt }) {
    const { id } = useSelector((state) => state.logeado);
    const buscar = (e) => {
      if(e===undefined || e===null){
        busqueda({
            "Marca": null,
            "Categoria": null,
            "precio": null,
            "nombre": null
          });
      }
      else{
        busqueda({
            "Marca": null,
            "Categoria": null,
            "precio": null,
            "nombre": e.value
          });
      }
    };
    if (!dt.loading) {
        var opt = dt.info.Nombres.map((e) =>{
          return {
            value: e,
            label: e
          }})
        }
    if(id==="2"){
        return(
            <Navbar style={navStart}>
            <Container>
            <Navbar.Brand style={titulo}>KongShoes</Navbar.Brand>
            <Nav>
            <Nav.Link style={{width:"400px" }}>{dt.loading?<h2>Cargando...</h2>:<Select onChange={buscar} isClearable options={opt} />}</Nav.Link>
        
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
            <Nav.Link style={{width:"400px" }}>{dt.loading?<h2>Cargando...</h2>:<Select onChange={buscar} isClearable options={opt} />}</Nav.Link>
        
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
        <Nav.Link style={{width:"400px" }}>{dt.loading?<h2>Cargando...</h2>:<Select onChange={buscar} isClearable options={opt} />}</Nav.Link>
        
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
                <Nav.Link style={{width:"400px" }}>{dt.loading?<h2>Cargando...</h2>:<Select onChange={buscar} isClearable options={opt} />}</Nav.Link>
        
            </Nav>
            <NoUserNavBar/>
            </Container>
        </Navbar>
        )
    }
}
export function Juegos({info}){
    const [compra, setCompra] = useState(false)
    const dispatch = useDispatch()
    const { id } = useSelector((state) => state.logeado);
    const userHover = () =>{
        setCompra(true)
    }
    const noUserHover = () =>{
        setCompra(false)
    }
    const agg = () =>{
        if(id==="2"){
        toast.success('Se ha agregado '+info.nombre+' al carrito', {
            position: "bottom-right",
            autoClose: 2400,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
         dispatch(add({
            id: info._id,
            nombre: info.nombre,
            marca: info.Marca,
            precio: info.precio,
            foto: info.foto,
            cantidad: info.cantidad
         }))
        }
        else{
            toast.error('Solo los usuarios pueden acceder al carrito', {
                position: "bottom-right",
                autoClose: 2400,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        }
    }
    return(
        <Col md={3}>
            <ToastContainer/>
            <Card style={tarjetas} onMouseEnter={userHover} onMouseLeave={noUserHover} onClick={agg} className='tarjeta'>
            <Card.Img style={cover} variant="top" src={compra? carrito:info.foto} />
            <Card.Body>
              <Card.Title><span style={jnombre}> {info.nombre} </span><span style={jprecio}> ${info.precio} </span></Card.Title>
            </Card.Body>
          </Card>
        </Col>
    )
}