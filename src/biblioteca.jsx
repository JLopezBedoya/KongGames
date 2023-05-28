import { useSelector} from 'react-redux';
import { filtro, titulo, navStart } from './inicio';
import { UserNavBar } from './navbar';
import marca from './assets/login(2).png';
import zapato from './assets/imagen-2.png'
import Container from 'react-bootstrap/Container';
import fondo from './assets/mgs.jpg';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
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
    const {mostrar} = useSelector((state)=>state.mostrando)
    const [expo, setExpo] = useState(1)
    const bibliotecaStyle = {
            display: mostrar[5],
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
                                <Pantalla exp={expo}/>
                            </Col>
                            <Col md={4}>
                                <Lista settear={setExpo}/>
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
function Lista({settear}){
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
        <ListGroup.Item action onClick={()=>exponer(1)}>Bethesda</ListGroup.Item>
        <ListGroup.Item action onClick={()=>exponer(2)}>Rockstar</ListGroup.Item>
        <ListGroup.Item action onClick={()=>exponer(3)}>Ubisof</ListGroup.Item>
        <ListGroup.Item action onClick={()=>exponer(4)}>Devolver</ListGroup.Item>
        <ListGroup.Item action onClick={()=>exponer(5)}>Bethesda</ListGroup.Item>
        <ListGroup.Item action onClick={()=>exponer(6)}>Rockstar</ListGroup.Item>
        <ListGroup.Item action onClick={()=>exponer(7)}>Ubisof</ListGroup.Item>
        <ListGroup.Item action onClick={()=>exponer(8)}>Devolver</ListGroup.Item>
        <ListGroup.Item action onClick={()=>exponer(9)}>Bethesda</ListGroup.Item>
        <ListGroup.Item action onClick={()=>exponer(10)}>Rockstar</ListGroup.Item>
        <ListGroup.Item action onClick={()=>exponer(11)}>Ubisof</ListGroup.Item>
        <ListGroup.Item action onClick={()=>exponer(12)}>Devolver</ListGroup.Item>
        <ListGroup.Item action onClick={()=>exponer(13)}>Bethesda</ListGroup.Item>
        <ListGroup.Item action onClick={()=>exponer(14)}>Rockstar</ListGroup.Item>
        <ListGroup.Item action onClick={()=>exponer(15)}>Ubisof</ListGroup.Item>
        <ListGroup.Item action onClick={()=>exponer(16)}>Devolver</ListGroup.Item>
    </ListGroup>
    )
}
function Pantalla({exp}){
    const [punt, setPunt] = useState(3)
    const puntuar = ({target})=>{
        setPunt(target.value)
    }
    return(
        <div style={{backgroundColor: "rgba(21,25,30,0.7)", borderRadius:"30px",height:"500px"}}>
            <Container>
            <Row>
                <Col className="offset-2 mb-3 mt-3">
                    <div style={cover}>
                        <img style={cover} src={marca} alt="..."/>
                    </div>
                </Col>
                <Col>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div style={shoes}>
                        <img style={shoes} src={zapato} alt="..."/>
                    </div>
                </Col>
                <Col style={{color: "white"}}>
                    <Row className="my-3">
                        <Col md={3}>
                            <p>Nombre: </p>
                        </Col>
                        <Col>
                            <p>Zapato Generico {exp}</p>
                        </Col>
                    </Row>
                    <Row className="my-3">
                        <Col md={3}>
                            <p>compra: </p>
                        </Col>
                        <Col>
                            <p>10/11/2009</p>
                        </Col>
                    </Row>
                    <Row className="my-3">
                        <Col md={3}>
                            <p>Precio: </p>
                        </Col>
                        <Col>
                            <p>$190000</p>
                        </Col>
                    </Row>
                    <Row className="my-3">
                    <Form.Label>Tu Puntuacion: {punt}/5</Form.Label>
                        <Form.Range min={1} max={5} onChange={puntuar}/>
                    </Row>
                </Col>
            </Row>
            </Container>
        </div>
    )
}