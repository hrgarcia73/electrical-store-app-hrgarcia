import './NavBar.css';
import { CartWidget } from "../CartWidget/CartWidget";

const NavBar =() => {
    return <div className='navbar-container'>     
                <div className='navbar'>
                    <div className='logo'>
                        <p>Electrical-Store</p>
                    </div>  
                    <ul id='menu-list'>
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Maniobra y protección</a></li>
                        <li><a href="#">Automatización</a></li>
                        <li><a href="#">Motion control</a></li>
                        <li><a href="#">Informática IOT</a></li>
                    </ul>
                    <CartWidget />
                </div>
            </div>
}

export default NavBar;