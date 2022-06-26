import React from "react";
import "./navbar.css";

const NavBar = () =>{
    return <div className="navbar">
                <div className="nav-items">
                    <a href="/tienda">TIENDA</a>
                    <a href="/nosotros">NOSOTROS</a>
                    <a href="/sericios">SERVICIOS</a>
                    <a href="/blog">BLOG</a>
                    <a href="/contacto">CONTACTO</a>
                </div>
            </div>   
}

export default NavBar;