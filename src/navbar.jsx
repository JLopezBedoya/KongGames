
import { useDispatch } from 'react-redux';
import { deslogear } from './redux/usuarioSlice';
import { clear } from './redux/carritoslice';
import { BiStoreAlt, BiBlanket, BiLogOut, BiCoinStack,BiCategoryAlt, BiCartAlt,  BiHomeAlt, BiLogIn } from "react-icons/bi";
import { Registrarse, RegistrarMarca } from "./login";
import Nav from 'react-bootstrap/Nav';
import { useState } from "react";

import { Link } from 'react-router-dom';

export function UserNavBar(){
    const dispatch = useDispatch()
    const [ho, setHo] = useState([false,false,false,false,false])
    return(
      <Nav className="d-flex">
        <Nav.Link><Link class="mx-1" onMouseEnter={()=>setHo([true,false,false,false,false])} onMouseLeave={()=>setHo([false,false,false,false,false])} variant="." style={ho[0]?{color:"lightseagreen", fontSize:"20px"}:{color:"white", fontSize:"20px"}} to={'/login'} onClick={()=>{dispatch(deslogear());dispatch(clear());}}><BiLogOut/></Link></Nav.Link>
        <Nav.Link><Link class="mx-1" onMouseEnter={()=>setHo([false,true,false,false,false])} onMouseLeave={()=>setHo([false,false,false,false,false])} variant="." style={ho[1]?{color:"lightseagreen", fontSize:"20px"}:{color:"white", fontSize:"20px"}} to={"/"} ><BiHomeAlt/></Link></Nav.Link>
        <Nav.Link><Link class="mx-1" onMouseEnter={()=>setHo([false,false,true,false,false])} onMouseLeave={()=>setHo([false,false,false,false,false])} variant="." style={ho[2]?{color:"lightseagreen", fontSize:"20px"}:{color:"white", fontSize:"20px"}} to={'/tienda'}><BiStoreAlt/></Link></Nav.Link>
        <Nav.Link><Link class="mx-1" onMouseEnter={()=>setHo([false,false,false,true,false])} onMouseLeave={()=>setHo([false,false,false,false,false])} variant="." style={ho[3]?{color:"lightseagreen", fontSize:"20px"}:{color:"white", fontSize:"20px"}} to={'/biblioteca'}><BiBlanket/></Link></Nav.Link>
        <Nav.Link><Link class="mx-1" onMouseEnter={()=>setHo([false,false,false,false,true])} onMouseLeave={()=>setHo([false,false,false,false,false])} variant="." style={ho[4]?{color:"lightseagreen", fontSize:"20px"}:{color:"white", fontSize:"20px"}} to={'/carrito'}><BiCartAlt/></Link></Nav.Link>
      </Nav>
    )
}
export function MarcaNavBar(){
    const dispatch = useDispatch()
    const [ho, setHo] = useState([false,false,false,false])
    return(
        <Nav className="d-flex">
            <Nav.Link><Link class="mx-1" variant="."  onMouseEnter={()=>setHo([true,false,false,false])} onMouseLeave={()=>setHo([false,false,false,false])} style={ho[0]?{color:"lightskyblue", fontSize:"20px"}:{color:"white", fontSize:"20px"}} to={'/login'} onClick={()=>{dispatch(deslogear());dispatch(clear());}}><BiLogOut/></Link></Nav.Link>
            <Nav.Link><Link class="mx-1" variant="."  onMouseEnter={()=>setHo([false,true,false,false])} onMouseLeave={()=>setHo([false,false,false,false])} style={ho[1]?{color:"lightskyblue", fontSize:"20px"}:{color:"white", fontSize:"20px"}} to={'/'}><BiHomeAlt/></Link></Nav.Link>
            <Nav.Link><Link class="mx-1" variant="."  onMouseEnter={()=>setHo([false,false,true,false])} onMouseLeave={()=>setHo([false,false,false,false])} style={ho[2]?{color:"lightskyblue", fontSize:"20px"}:{color:"white", fontSize:"20px"}} to={'/tienda'}><BiStoreAlt/></Link></Nav.Link>
            <Nav.Link><Link class="mx-1" variant="."  onMouseEnter={()=>setHo([false,false,false,true])} onMouseLeave={()=>setHo([false,false,false,false])} style={ho[3]?{color:"lightskyblue", fontSize:"20px"}:{color:"white", fontSize:"20px"}} to={'/bodega'}><BiCoinStack/></Link></Nav.Link>
        </Nav>
    )
}
export function AdminNavBar(){
    const dispatch = useDispatch()
    const [ho, setHo] = useState([false,false,false,false,false])
    return(
        <Nav className="d-flex">
            <Nav.Link><Link class="mx-1" variant="."  onMouseEnter={()=>setHo([true,false,false,false,false])} onMouseLeave={()=>setHo([false,false,false,false,false])} style={ho[0]?{color:"coral", fontSize:"20px"}:{color:"white", fontSize:"20px"}} to={'/login'} onClick={()=>{dispatch(deslogear());dispatch(clear());}}><BiLogOut/></Link></Nav.Link>
            <Nav.Link><Link class="mx-1" variant="."  onMouseEnter={()=>setHo([false,true,false,false,false])} onMouseLeave={()=>setHo([false,false,false,false,false])} style={ho[1]?{color:"coral", fontSize:"20px"}:{color:"white", fontSize:"20px"}} to={'/'}><BiHomeAlt/></Link></Nav.Link>
            <Nav.Link><Link class="mx-1" variant="."  onMouseEnter={()=>setHo([false,false,true,false,false])} onMouseLeave={()=>setHo([false,false,false,false,false])} style={ho[2]?{color:"coral", fontSize:"20px"}:{color:"white", fontSize:"20px"}} to={'/tienda'}><BiStoreAlt/></Link></Nav.Link>
            <Nav.Link><Link class="mx-1" variant="."  onMouseEnter={()=>setHo([false,false,false,true,false])} onMouseLeave={()=>setHo([false,false,false,false,false])} style={ho[3]?{color:"coral", fontSize:"20px"}:{color:"white", fontSize:"20px"}} to={'/bodega'}><BiCoinStack/></Link></Nav.Link>
            <Nav.Link><Link class="mx-1" variant="."  onMouseEnter={()=>setHo([false,false,false,false,true])} onMouseLeave={()=>setHo([false,false,false,false,false])} style={ho[4]?{color:"coral", fontSize:"20px"}:{color:"white", fontSize:"20px"}} to={'/usuarios'}><BiCategoryAlt/></Link></Nav.Link>
        </Nav>
    )
}
export function NoUserNavBar(){
    const [ho, setHo] = useState([false,false,false,false,false])
    return(
      <Nav className="d-flex">
        <Nav.Link><Link variant="." onMouseEnter={()=>setHo([true,false,false,false,false])} onMouseLeave={()=>setHo([false,false,false,false,false])} style={ho[0]?{color:"yellow", fontSize:"20px"}:{color:"white", fontSize:"20px"}} to={'/login'}><BiLogIn/></Link></Nav.Link>
        <Registrarse ho={ho} setHo={setHo}/>
        <Nav.Link><Link variant="." onMouseEnter={()=>setHo([false,false,true,false,false])} onMouseLeave={()=>setHo([false,false,false,false,false])} style={ho[2]?{color:"yellow", fontSize:"20px"}:{color:"white", fontSize:"20px"}} to={'/'}><BiHomeAlt/></Link></Nav.Link>
        <RegistrarMarca ho={ho} setHo={setHo}/>
        <Nav.Link><Link variant="." onMouseEnter={()=>setHo([false,false,false,false,true])} onMouseLeave={()=>setHo([false,false,false,false,false])} style={ho[4]?{color:"yellow", fontSize:"20px"}:{color:"white", fontSize:"20px"}} to={'/tienda'}><BiStoreAlt/></Link></Nav.Link>
      </Nav>
    )
}
