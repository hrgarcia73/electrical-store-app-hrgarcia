import logo from '../../img/logo-novaware.gif';
import "./navbar.css";
import { CartWidget } from "../CartWidget/CartWidget";
import {NavLink} from 'react-router-dom';

const NavBar = () =>{
    return <div className="navbar-container">
                <div className="navbar">
                    <img src={logo} className="App-logo" alt="logo novaware" />
                    <div className='search-area'>
                        <input type='search'></input>
                        <button type='submit'> <i className='fa fa-search'></i> </button>
                    </div> 
                    <div className="nav-items">
                        {/* 
                            isActive es una propiadad del objeto Data que devuelve la funcion callback.
                            se desestructura para no usar Data.isActive y se consulta si el link está activo.
                            Si está activo se agrega la case active, a la que se declara en navbar.css.
                            Si se coloca solo en el primero funciona para todos, pero en los ejemplos lo ponen 
                            en todos los enlaces.
                        */}
                        <NavLink className={({isActive})=>(isActive ? 'active' : '')} to="/">TIENDA</NavLink>
                        <NavLink className={({isActive})=>(isActive ? 'active' : '')} to="/nosotros">NOSOTROS</NavLink>
                        <NavLink className={({isActive})=>(isActive ? 'active' : '')} to="/servicios">SERVICIOS</NavLink>
                        <NavLink className={({isActive})=>(isActive ? 'active' : '')} to="/blog">BLOG</NavLink>
                        <NavLink className={({isActive})=>(isActive ? 'active' : '')} to="/contacto">CONTACTO</NavLink>
                    </div>
                    <CartWidget/>
                </div>
           
            </div>   
}

export default NavBar;