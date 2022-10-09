import { useForm } from "react-hook-form";
import { useContext } from 'react';
import './Form.css';
import { CartContext } from '../../context/CartContext';
import { db } from '../../utils/firebase';
import {collection, addDoc} from "firebase/firestore";

export const Form = () =>{

    const {productCartList, clear, getPrecioTotal} = useContext(CartContext); 
    const { register, formState: { errors }, handleSubmit } = useForm()

    let today = new Date();

    const sendOrder = (data) => {
        const order = {
          buyer: {
            name:data.name,
            phone:data.phone,
            email:data.email  
          },
          items: productCartList,
          date: today.toLocaleString(),
          total: getPrecioTotal()
      }
      const orderCollection = collection(db,"orders");
      addDoc(orderCollection, order).then(({id}) => {
        alert("La orden ha sido creada con exito, \n el número de orden es: " + id);
        clear();
    }); 
    }

    return(
        <>
            { productCartList.length>=1 && 
            <div className="form-container">
                    <div className='total-price'>
                        <p className='totalprice-title'>Total de la compra</p>
                        <p className='totalprice-value'>${getPrecioTotal()}</p>
                    </div>
                    <h2>Por favor, completa tus datos para contiunuar con la compra</h2>
                    <form onSubmit={handleSubmit(sendOrder)}>
                        <label>Nombre</label>
                        {errors.name?.type === 'required' && <p className="form-error-message">El campo nombre es requerido</p>}
                        <input type="text" placeholder='nombre' {...register('name', {
                            required: true
                        })} />
                            

                        <label>telefono</label>
                        {errors.phone?.type === 'required' && <p className="form-error-message">El campo telefono es requerido</p>}
                        <input type="number" placeholder='1122224567'{...register('phone', {
                            required: true
                        })} />

                        <label>email</label>
                        {errors.email?.type === 'pattern' && <p className="form-error-message">El el formato del campo email es incorrecto</p>}
                        <input type="email" placeholder='email'{...register('email', {
                            pattern: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
                        })} />

                        <button className="form-send-order" type='submit'>Enviar Orden</button>         
                    </form> 
            </div>} 
        </>
    )
}