import { cambiar } from "./redux/mostrarslice";
import { useDispatch } from 'react-redux';
import { deslogear } from './redux/usuarioSlice';
import { clear } from './redux/carritoslice';
import { BiStoreAlt, BiBlanket, BiLogOut, BiCoinStack,BiCategoryAlt, BiCartAlt,  BiHomeAlt, BiLogIn } from "react-icons/bi";
import { Registrarse, RegistrarMarca } from "./login";
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
export function UserNavBar(){
    const dispatch = useDispatch()
    const [ho, setHo] = useState([false,false,false,false,false])
    return(
      <Nav className="d-flex">
        <Nav.Link><Button onMouseEnter={()=>setHo([true,false,false,false,false])} onMouseLeave={()=>setHo([false,false,false,false,false])} variant="." style={ho[0]?{color:"lightseagreen", fontSize:"20px"}:{color:"white", fontSize:"20px"}} onClick={()=>{dispatch(cambiar(0));dispatch(deslogear());dispatch(clear())}}><BiLogOut/></Button></Nav.Link>
        <Nav.Link><Button onMouseEnter={()=>setHo([false,true,false,false,false])} onMouseLeave={()=>setHo([false,false,false,false,false])} variant="." style={ho[1]?{color:"lightseagreen", fontSize:"20px"}:{color:"white", fontSize:"20px"}} onClick={()=>dispatch(cambiar(1))}><BiHomeAlt/></Button></Nav.Link>
        <Nav.Link><Button onMouseEnter={()=>setHo([false,false,true,false,false])} onMouseLeave={()=>setHo([false,false,false,false,false])} variant="." style={ho[2]?{color:"lightseagreen", fontSize:"20px"}:{color:"white", fontSize:"20px"}} onClick={()=>dispatch(cambiar(2))}><BiStoreAlt/></Button></Nav.Link>
        <Nav.Link><Button onMouseEnter={()=>setHo([false,false,false,true,false])} onMouseLeave={()=>setHo([false,false,false,false,false])} variant="." style={ho[3]?{color:"lightseagreen", fontSize:"20px"}:{color:"white", fontSize:"20px"}} onClick={()=>dispatch(cambiar(5))}><BiBlanket/></Button></Nav.Link>
        <Nav.Link><Button onMouseEnter={()=>setHo([false,false,false,false,true])} onMouseLeave={()=>setHo([false,false,false,false,false])} variant="." style={ho[4]?{color:"lightseagreen", fontSize:"20px"}:{color:"white", fontSize:"20px"}} onClick={()=>dispatch(cambiar(4))}><BiCartAlt/></Button></Nav.Link>
      </Nav>
    )
}
export function MarcaNavBar(){
    const dispatch = useDispatch()
    const [ho, setHo] = useState([false,false,false,false])
    return(
        <Nav className="d-flex">
            <Nav.Link><Button variant="."  onMouseEnter={()=>setHo([true,false,false,false])} onMouseLeave={()=>setHo([false,false,false,false])} style={ho[0]?{color:"lightskyblue", fontSize:"20px"}:{color:"white", fontSize:"20px"}} onClick={()=>{dispatch(cambiar(0));dispatch(deslogear())}}><BiLogOut/></Button></Nav.Link>
            <Nav.Link><Button variant="."  onMouseEnter={()=>setHo([false,true,false,false])} onMouseLeave={()=>setHo([false,false,false,false])} style={ho[1]?{color:"lightskyblue", fontSize:"20px"}:{color:"white", fontSize:"20px"}} onClick={()=>dispatch(cambiar(1))}><BiHomeAlt/></Button></Nav.Link>
            <Nav.Link><Button variant="."  onMouseEnter={()=>setHo([false,false,true,false])} onMouseLeave={()=>setHo([false,false,false,false])} style={ho[2]?{color:"lightskyblue", fontSize:"20px"}:{color:"white", fontSize:"20px"}} onClick={()=>dispatch(cambiar(2))}><BiStoreAlt/></Button></Nav.Link>
            <Nav.Link><Button variant="."  onMouseEnter={()=>setHo([false,false,false,true])} onMouseLeave={()=>setHo([false,false,false,false])} style={ho[3]?{color:"lightskyblue", fontSize:"20px"}:{color:"white", fontSize:"20px"}} onClick={()=>dispatch(cambiar(3))}><BiCoinStack/></Button></Nav.Link>
        </Nav>
    )
}
export function AdminNavBar(){
    const dispatch = useDispatch()
    const [ho, setHo] = useState([false,false,false,false,false])
    return(
        <Nav className="d-flex">
            <Nav.Link><Button variant="."  onMouseEnter={()=>setHo([true,false,false,false,false])} onMouseLeave={()=>setHo([false,false,false,false,false])} style={ho[0]?{color:"coral", fontSize:"20px"}:{color:"white", fontSize:"20px"}} onClick={()=>{dispatch(cambiar(0));dispatch(deslogear())}}><BiLogOut/></Button></Nav.Link>
            <Nav.Link><Button variant="."  onMouseEnter={()=>setHo([false,true,false,false,false])} onMouseLeave={()=>setHo([false,false,false,false,false])} style={ho[1]?{color:"coral", fontSize:"20px"}:{color:"white", fontSize:"20px"}} onClick={()=>dispatch(cambiar(1))}><BiHomeAlt/></Button></Nav.Link>
            <Nav.Link><Button variant="."  onMouseEnter={()=>setHo([false,false,true,false,false])} onMouseLeave={()=>setHo([false,false,false,false,false])} style={ho[2]?{color:"coral", fontSize:"20px"}:{color:"white", fontSize:"20px"}} onClick={()=>dispatch(cambiar(2))}><BiStoreAlt/></Button></Nav.Link>
            <Nav.Link><Button variant="."  onMouseEnter={()=>setHo([false,false,false,true,false])} onMouseLeave={()=>setHo([false,false,false,false,false])} style={ho[3]?{color:"coral", fontSize:"20px"}:{color:"white", fontSize:"20px"}} onClick={()=>dispatch(cambiar(3))}><BiCoinStack/></Button></Nav.Link>
            <Nav.Link><Button variant="."  onMouseEnter={()=>setHo([false,false,false,false,true])} onMouseLeave={()=>setHo([false,false,false,false,false])} style={ho[4]?{color:"coral", fontSize:"20px"}:{color:"white", fontSize:"20px"}} onClick={()=>dispatch(cambiar(6))}><BiCategoryAlt/></Button></Nav.Link>
        </Nav>
    )
}
export function NoUserNavBar(){
    const dispatch = useDispatch()
    const [ho, setHo] = useState([false,false,false,false,false])
    return(
      <Nav className="d-flex">
        <Nav.Link><Button variant="." onMouseEnter={()=>setHo([true,false,false,false,false])} onMouseLeave={()=>setHo([false,false,false,false,false])} style={ho[0]?{color:"yellow", fontSize:"20px"}:{color:"white", fontSize:"20px"}} onClick={()=>{dispatch(cambiar(0))}}><BiLogIn/></Button></Nav.Link>
        <Registrarse ho={ho} setHo={setHo}/>
        <Nav.Link><Button variant="." onMouseEnter={()=>setHo([false,false,true,false,false])} onMouseLeave={()=>setHo([false,false,false,false,false])} style={ho[2]?{color:"yellow", fontSize:"20px"}:{color:"white", fontSize:"20px"}} onClick={()=>dispatch(cambiar(1))}><BiHomeAlt/></Button></Nav.Link>
        <RegistrarMarca ho={ho} setHo={setHo}/>
        <Nav.Link><Button variant="." onMouseEnter={()=>setHo([false,false,false,false,true])} onMouseLeave={()=>setHo([false,false,false,false,false])} style={ho[4]?{color:"yellow", fontSize:"20px"}:{color:"white", fontSize:"20px"}} onClick={()=>dispatch(cambiar(2))}><BiStoreAlt/></Button></Nav.Link>
      </Nav>
    )
}
