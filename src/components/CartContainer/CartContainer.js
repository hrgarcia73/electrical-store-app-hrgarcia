import './CartContainer.css';
import { Cart } from '../Cart/Cart';
import { Form } from '../Form/Form';

export const CartContainer = () =>{

    return(
        <div className='cart-container-main'>
            <h3>Contenido del carito</h3>
            <div className='cart-container'>
                <Cart />
                <Form />
            </div>

        </div>
    )
}