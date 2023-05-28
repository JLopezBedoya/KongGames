import { cambiar } from "./redux/mostrarslice";
import { useDispatch } from 'react-redux';
import { deslogear } from './redux/usuarioSlice';
import { clear } from './redux/carritoslice';
import { BiStoreAlt, BiBlanket, BiLogOut, BiCoinStack,BiCategoryAlt, BiCartAlt,  BiHomeAlt, BiLogIn } from "react-icons/bi";
import { Registrarse, RegistrarMarca } from "./login";
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
export function UserNavBar(){
    const dispatch = useDispatch()
    return(
      <Nav className="d-flex">
        <Nav.Link><Button variant="." style={{color:"white", fontSize:"20px"}}  onClick={()=>{dispatch(cambiar(0));dispatch(deslogear());dispatch(clear())}}><BiLogOut/></Button></Nav.Link>
        <Nav.Link><Button variant="." style={{color:"white", fontSize:"20px"}}   onClick={()=>dispatch(cambiar(1))}><BiHomeAlt/></Button></Nav.Link>
        <Nav.Link><Button variant="." style={{color:"white", fontSize:"20px"}} onClick={()=>dispatch(cambiar(2))}><BiStoreAlt/></Button></Nav.Link>
        <Nav.Link><Button variant="." style={{color:"white", fontSize:"20px"}} onClick={()=>dispatch(cambiar(5))}><BiBlanket/></Button></Nav.Link>
        <Nav.Link><Button variant="." style={{color:"white", fontSize:"20px"}} onClick={()=>dispatch(cambiar(4))}><BiCartAlt/></Button></Nav.Link>
      </Nav>
    )
}
export function MarcaNavBar(){
    const dispatch = useDispatch()
    return(
        <Nav className="d-flex">
            <Nav.Link><Button variant="." style={{color:"white", fontSize:"20px"}}  onClick={()=>{dispatch(cambiar(0));dispatch(deslogear())}}><BiLogOut/></Button></Nav.Link>
            <Nav.Link><Button variant="." style={{color:"white", fontSize:"20px"}}   onClick={()=>dispatch(cambiar(1))}><BiHomeAlt/></Button></Nav.Link>
            <Nav.Link><Button variant="." style={{color:"white", fontSize:"20px"}} onClick={()=>dispatch(cambiar(2))}><BiStoreAlt/></Button></Nav.Link>
            <Nav.Link><Button variant="." style={{color:"white", fontSize:"20px"}} onClick={()=>dispatch(cambiar(3))}><BiCoinStack/></Button></Nav.Link>
        </Nav>
    )
}
export function AdminNavBar(){
    const dispatch = useDispatch()
    return(
        <Nav className="d-flex">
            <Nav.Link><Button variant="." style={{color:"white", fontSize:"20px"}}  onClick={()=>{dispatch(cambiar(0));dispatch(deslogear())}}><BiLogOut/></Button></Nav.Link>
            <Nav.Link><Button variant="." style={{color:"white", fontSize:"20px"}}   onClick={()=>dispatch(cambiar(1))}><BiHomeAlt/></Button></Nav.Link>
            <Nav.Link><Button variant="." style={{color:"white", fontSize:"20px"}} onClick={()=>dispatch(cambiar(2))}><BiStoreAlt/></Button></Nav.Link>
            <Nav.Link><Button variant="." style={{color:"white", fontSize:"20px"}} onClick={()=>dispatch(cambiar(3))}><BiCoinStack/></Button></Nav.Link>
            <Nav.Link><Button variant="." style={{color:"white", fontSize:"20px"}} onClick={()=>dispatch(cambiar(6))}><BiCategoryAlt/></Button></Nav.Link>
        </Nav>
    )
}
export function NoUserNavBar(){
    const dispatch = useDispatch()
    return(
      <Nav className="d-flex">
        <Nav.Link><Button variant="." style={{color:"white", fontSize:"20px"}} onClick={()=>{dispatch(cambiar(0))}}><BiLogIn/></Button></Nav.Link>
        <Registrarse/>
        <Nav.Link><Button variant="." style={{color:"white", fontSize:"20px"}}   onClick={()=>dispatch(cambiar(1))}><BiHomeAlt/></Button></Nav.Link>
        <RegistrarMarca/>
        <Nav.Link><Button variant="." style={{color:"white", fontSize:"20px"}}  onClick={()=>dispatch(cambiar(2))}><BiStoreAlt/></Button></Nav.Link>
      </Nav>
    )
}
