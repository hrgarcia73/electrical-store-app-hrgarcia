import './NavBar.css';
import { CartWidget } from "../CartWidget/CartWidget";
import { NavLink } from 'react-router-dom';

const NavBar =() => {
    return <div className='navbar-container'>     
                <div className='navbar'>
                    <div className='logo'>
                        <p>Electrical-Store</p>
                    </div> 
                    <div className="nav-items">
                        {/* 
                                isActive es una propiadad del objeto Data que devuelve la funcion callback.
                                se desestructura para no usar Data.isActive y se consulta si el link está activo.
                                Si está activo se agrega la case active, a la que se declara en navbar.css.
                                Si se coloca solo en el primero funciona para todos, pero en los ejemplos lo ponen 
                                en todos los enlaces.
                        */}
                        <NavLink className={({isActive})=>(isActive ? 'active' : '')} to="/">Inicio</NavLink>
                        <NavLink className={({isActive})=>(isActive ? 'active' : '')} to="/productos/Aparatos de maniobra">Maniobra y protección</NavLink>
                        <NavLink className={({isActive})=>(isActive ? 'active' : '')} to="/productos/Automatización y comunicación">Automatización</NavLink>
                        <NavLink className={({isActive})=>(isActive ? 'active' : '')} to="/productos/Motores y accionamientos">Motores y accionamientos</NavLink>
                        <NavLink className={({isActive})=>(isActive ? 'active' : '')} to="/productos/Informática IOT">Informática IOT</NavLink>
                    </div>
                    <CartWidget />
                </div>
            </div>
}

export default NavBar;