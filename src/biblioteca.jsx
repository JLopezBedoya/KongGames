import { filtro, titulo, navStart } from './inicio';
import { UserNavBar } from './navbar';
import Container from 'react-bootstrap/Container';
import fondo from './assets/ksBiblioteca.png';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useGet } from './hooks/useGet';
const cover = {
    minHeight: "150px",
    minWidth: "420px",
    maxHeight: "150px",
    maxWidth: "420px",
    borderRadius: "50px",
}
const shoes = {
    minHeight: "300px",
    minWidth: "400px",
    maxHeight: "300px",
    borderRadius: "20px",
    maxWidth: "400px",
}
export function Biblioteca(){
    const [expo, setExpo] = useState(0)
    const {iu} = useSelector((state)=>state.logeado)
    const {loading, info} = useGet("/user/comprados/"+iu)
    const bibliotecaStyle = {
            width: "100vw", 
            height: "100vh",
            backgroundImage: "url("+fondo+")",
            backgroundSize: "100%"
    }
    return(
        <div style={bibliotecaStyle}>
            <div style={filtro}>
                <Container>
                        <BiliotecaNav/>
                        <Row style={{marginTop: "30px",}}>
                            <Col md={8}>
                                <Pantalla loading={loading} info={info} exp={expo}/>
                            </Col>
                            <Col md={4}>
                                <Lista loading={loading} info={info} settear={setExpo}/>
                            </Col>
                        </Row>
                </Container>
            </div>
        </div>
    )
}
function BiliotecaNav(){
    return(
        <Navbar style={navStart}>
        <Container>
        <Navbar.Brand style={titulo}>KongShoes</Navbar.Brand>
        <UserNavBar/>
        </Container>
    </Navbar>
    )
}
function Lista({settear, loading, info}){
    const distList = {
        borderRadius: "30px",
        maxWidth: "400px",
        height: "480px",
        overflow: "scroll",
        scrollbarWidth: "none",
        cursor: "pointer"
    }
    const exponer= (id)=>settear(id)
    return(
    <ListGroup variant="flush" style={distList}>
        {loading?<h1>Cargando</h1>:(info===undefined)?<h1>no hay productos</h1>:info.map(({producto}, id)=><ListGroup.Item action onClick={()=>exponer(id)}>{producto}</ListGroup.Item>)}
    </ListGroup>
    )
}
function Pantalla({exp, loading, info}){
    return(
        <div style={{backgroundColor: "rgba(21,25,30,0.7)", borderRadius:"30px",height:"500px"}}>
            {loading?<h1>Cargando</h1>:(info===undefined || info.length===0)?<h1>aqui se veran los productos que compres</h1>:<Mostrando exp={exp} info={info}/>}
        </div>
    )
}
function Mostrando({info, exp}){
    return(
        <Container>
            <Row>
                <Col className="offset-2 mb-3 mt-3">
                    <div style={cover}>
                        <img style={cover} src={info[exp].banner} alt="..."/>
                    </div>
                </Col>
                <Col>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div style={shoes}>
                        <img style={shoes} src={info[exp].foto} alt="..."/>
                    </div>
                </Col>
                <Col style={{color: "white"}}>
                    <Row className="my-3">
                        <Col md={3}>
                            <p>Nombre: </p>
                        </Col>
                        <Col>
                            <p>{info[exp].producto}</p>
                        </Col>
                    </Row>
                    <Row className="my-3">
                        <Col md={3}>
                            <p>Precio: </p>
                        </Col>
                        <Col>
                            <p>{info[exp].precio}</p>
                        </Col>
                    </Row>
                    <Row className="my-3">
                        <Col md={3}>
                            <p>Marca: </p>
                        </Col>
                        <Col>
                            <p>{info[exp].marca}</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
            </Container>
    )
}