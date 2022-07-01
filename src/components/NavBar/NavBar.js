import React from "react";
import "./navbar.css";
import { CartWidget } from "../CartWidget/CartWidget";

const NavBar = () =>{
    return <div className="navbar">
                <div className="nav-items">
                    <a href="/tienda">TIENDA</a>
                    <a href="/nosotros">NOSOTROS</a>
                    <a href="/sericios">SERVICIOS</a>
                    <a href="/blog">BLOG</a>
                    <a href="/contacto">CONTACTO</a>
                </div>
                <CartWidget/>
            </div>   
}

export default NavBar;