import { useSelector, useDispatch } from 'react-redux';
import { filtro, titulo, navStart } from './inicio';
import { remove, clear } from './redux/carritoslice';
import { UserNavBar } from './navbar';
import Container from 'react-bootstrap/Container';
import fondo from './assets/mgs.jpg';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const compra = {
    height: "200px",
    width: "700px",
    margin: "20px 0px",
    backgroundColor: "rgba(33, 37, 41, 0.8)",
    color: "white",
    borderRadius: "30px",
    overflow: "hidden"
}
const cover = {
    margin:"0",
    minHeight: "200px",
    minWidth: "250px",
    maxHeight: "200px",
    maxWidth: "250px",
}
const vacio = {
    height: "200px",
    width: "700px",
    margin: "20px 0px",
    backgroundColor: "rgba(33, 37, 41, 0.8)",
    color: "white",
    borderRadius: "30px",
    overflow: "hidden",
    textAlign: "center",
    paddingTop: "70px"
}
const foto = {
    minHeight: "200px",
    minWidth: "250px",
    maxHeight: "200px",
    maxWidth: "250px",
}
const panel = {
    backgroundColor: "rgba(33, 37, 41, 0.8)",
    height: "350px",
    margin: "20px",
    borderRadius: "30px",
    color: "white",
    paddingTop: "10px"
}
export function Carrito(){
    const {mostrar} = useSelector((state)=>state.mostrando)
    const { save } = useSelector((state)=>state.carrito)
    const carritoStyle = {
            display: mostrar[4],
            width: "100vw", 
            height: "100vh",
            backgroundImage: "url("+fondo+")",
            backgroundSize: "100%"
    }
    return(
        <div style={carritoStyle}>
            <div style={filtro}>
                <Container>
                        <CarritoNav/>
                            <Row>
                                <Col>
                                    <Info />
                                </Col>
                                <Col>
                                    <Container style={{height: "550px", overflow: "scroll", scrollbarWidth: "none"}}>
                                        {(save.length!==0)?save.map((e,i)=>(
                                            <Compras key={i} datos={e} iu={i}/>
                                        )): <h1 style={vacio} >Carrito Vacio</h1>}
                                    </Container>
                                </Col>
                            </Row>
                </Container>
            </div>
        </div>
    )
}
function CarritoNav(){
    return(
        <Navbar style={navStart}>
        <Container>
        <Navbar.Brand style={titulo}>KongShoes</Navbar.Brand>
        <UserNavBar/>
        </Container>
    </Navbar>
    )
}
function Compras({datos, iu}){
    const dispatch = useDispatch()
    const comprar = () =>{
        alert("Zapatos comprar")
        dispatch(remove(iu))
    }
    const quitar = ()=>{
        dispatch(remove(iu))
    }
    return(
        <div style={compra}>
            <Row>
                <Col style={{padding:"0", marginRight: "10px"}} md={4}>
                    <div style={cover}>
                        <img src='https://cdn.mobygames.com/4d4a9422-abd5-11ed-ba50-02420a000199.webp' style={foto} alt='...'/>
                    </div>
                </Col>
                <Col>
                    <Row style={{marginTop:"20px"}}>
                        <Col md={8}>
                            <p> {datos} </p>
                        </Col>
                        <Col>
                            <p>$190.000</p>
                        </Col>
                    </Row>
                    <Row style={{marginTop:"20px"}}>
                        <Col md={8}>
                            <p>Marca con un nombre creado por ia</p>
                        </Col>
                        <Col>
                            <p>9/10</p>
                        </Col>
                    </Row>
                    <Row style={{marginTop:"20px", paddingRight:"10px"}}>
                        <ButtonGroup aria-label="Basic example">
                            <Button onClick={comprar} variant="success">Comprar</Button>
                            <Button onClick={quitar} variant="danger">Quitar</Button>
                        </ButtonGroup>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}
function Info(){
    const dispatch = useDispatch()
    return(
        <div style={panel}>
            <h3 style={{textAlign: "center", marginTop: "15px"}}>Informacion de compra</h3>
            <Container>
            <Row>
                <Col>
                    <Row style={{margin: "25px 0"}}>
                        <Col md={7}>
                            <p>total de productos:</p>
                        </Col>
                        <Col>
                            <p>5</p>
                        </Col>
                    </Row>
                    <Row style={{margin: "10px 0"}}>
                        <Col md={7}>
                            <p>Total de compra:</p>
                        </Col>
                        <Col>
                            <p>$550</p>
                        </Col>
                    </Row>
                    <Row>
                    <ButtonGroup vertical>
                        <Button variant="success">Comprar Todo</Button>
                        <Button onClick={()=>dispatch(clear())} variant="danger">Vaciar carrito</Button>
                    </ButtonGroup>
                </Row>
                </Col>
            </Row>
            </Container>
        </div>
    )
} 