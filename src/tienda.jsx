import { useSelector, useDispatch } from 'react-redux';
import { useState, useRef, useEffect } from 'react';
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
import carrito from "./assets/agg.jpg"
import { usePost } from './hooks/usePost'
import { useGet } from './hooks/useGet';
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
    const [opt, setOpt] = useState([]);
    const { id } = useSelector((state) => state.logeado);
    var load = dt.loading
    const buscar = (e) => {
      busqueda({
        "Marca": null,
        "Categoria": null,
        "precio": null,
        "nombre": e.value
      });
    };
    useEffect(() => {
      if (!load) {
        var a = dt.info.Nombres.map((e) => {
          return {
            value: e,
            label: e
          };
        });
        setOpt(a);
      }
    }, [load]);
    var def = [{ value: 'cargando', label: 'Cargando...' }];
    if(id==="2"){
        return(
            <Navbar style={navStart}>
            <Container>
            <Navbar.Brand style={titulo}>KongShoes</Navbar.Brand>
            <Nav>
            <Nav.Link style={{width:"400px" }}><Select onChange={buscar} options={load ? def : opt} /></Nav.Link>
                <Nav.Link><Jfiltros filtros={busqueda} dt={dt}/></Nav.Link>
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
            <Nav.Link style={{width:"400px" }}><Select onChange={buscar} options={load ? def : opt} /></Nav.Link>
                <Nav.Link><Jfiltros filtros={busqueda} dt={dt}/></Nav.Link>
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
        <Nav.Link style={{width:"400px" }}><Select onChange={buscar} options={load ? def : opt} /></Nav.Link>
            <Nav.Link><Jfiltros filtros={busqueda} dt={dt}/></Nav.Link>    
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
                <Nav.Link style={{width:"400px" }}><Select onChange={buscar} options={load ? def : opt} /></Nav.Link>
                <Nav.Link><Jfiltros filtros={busqueda} dt={dt}/></Nav.Link>
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
    const userHover = () =>{
        setCompra(true)
    }
    const noUserHover = () =>{
        setCompra(false)
    }
    const agg = () =>{
         dispatch(add(info.id))
    }
    return(
        <Col md={3}>
            <Card style={tarjetas} onMouseEnter={userHover} onMouseLeave={noUserHover} onClick={agg} className='tarjeta'>
            <Card.Img style={cover} variant="top" src={compra? carrito:info.foto} />
            <Card.Body>
              <Card.Title><span style={jnombre}> {info.nombre} </span><span style={jprecio}> ${info.precio} </span></Card.Title>
            </Card.Body>
          </Card>
        </Col>
    )
}
function Jfiltros({ filtros, dt }) {
    const [show, setShow] = useState(false);
    const [Rprecio, setRprecio] = useState(0);
    const [opt, setOpt] = useState([]);
    const [opc, setOpc] = useState([]);
    const [min, setMin] = useState()
    const [max, setMax] = useState()
    const distri = useRef(null);
    const cat = useRef(null);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handlerprecio = ({ target }) => setRprecio(target.value);
  
    const handlerDatos = () => {
      var filcat;
      var fildist;
      filcat = cat.current.state.selectValue.map((e) => e.value);
      fildist = distri.current.state.selectValue.map((e) => e.value);
      var fltros = {
        Marca: fildist[0],
        categorias: filcat,
        precio: Rprecio
      };
      if (fltros.Marca === undefined) fltros.Marca = null;
      if (fltros.categorias.length === 0) fltros.categorias = null;
      filtros(fltros)
    };
  
    useEffect(() => {
      if (!dt.loading) {
        if (!dt.loading) {
            var a = dt.info.marcas.map((e) => {
              return {
                value: e,
                label: e
              };
            });
            var b = dt.info.categorias.map((e) => {
                return {
                  value: e,
                  label: e
                };
              });
               setMin(dt.info.preciomin)
               setMax(dt.info.preciomax)
            setOpt(a);
            setOpc(b)
          }
      }
    }, [dt.loading]);
  
    var def = [{ value: 'cargando', label: 'Cargando...' }];
  
    return (
      <div>
        <Button variant="info" onClick={handleShow}>
          Ver filtros
        </Button>
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title className="otro">Filtrar Busqueda de zapatos</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Form>
              <Form.Group className="mb-3">
                <Select className="my-4" ref={distri} placeholder="Marca" isClearable={true} options={dt.loading ? def : opt} />
                <Select className="mb-4" ref={cat} placeholder="categorias" isMulti options={dt.loading ? def : opc} />
                <Form.Label className="otro">Rango de precio: {(Rprecio===0)? max:Rprecio} </Form.Label>
                <Form.Range defaultValue={dt.loading ? 100 : max} min={dt.loading ? 0 : min} max={dt.loading ? 100 : max} onChange={handlerprecio} />
              </Form.Group>
              <Button variant="light" className="my-4" onClick={handlerDatos}>
                Aplicar Filtros
              </Button>
            </Form>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    );
  }
