import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children})=>{
    const [productCartList, setProductCartList] = useState([]);

    const clear = () =>{
        const auxArray = []
        setProductCartList(auxArray);
        console.log('vaciar carrito')    
    }
    const removeItem = (itemId) =>{
        const auxArray = [...productCartList]
        const newArray = auxArray.filter(item => item.id !== itemId)
        setProductCartList(newArray);
    }
    const isInCart = (id) =>{
        const auxArray = [...productCartList]
        const newArray = auxArray.filter(item => item.id === id)
        let idExists = false
        if (newArray.length >= 1){
            idExists=true
        }
        return(idExists)
    }
    const addItem = (item) =>{
        if(!isInCart(item.id)){
            const newProduct ={...item, precioTotal:item.cantidad*item.precio}
            const newList = [...productCartList, newProduct];
            setProductCartList(newList);
        }else{
            const newList = [...productCartList];
            const productIndex = productCartList.findIndex(el => el.id === item.id);
            newList[productIndex].cantidad = newList[productIndex].cantidad + item.cantidad;
            newList[productIndex].precioTotal =   newList[productIndex].precio * newList[productIndex].cantidad;
        }
    }

    const getTotalItems = () =>{
        const totalItems= productCartList.reduce((acc,item)=> acc + item.cantidad, 0);
        return totalItems;
    } 

    const getPrecioTotal = () =>{
        const precioTotal= productCartList.reduce((acc,item)=> acc + item.precioTotal, 0);
        return precioTotal;
    } 

    return(
        <CartContext.Provider value={{productCartList, addItem, removeItem, clear, getTotalItems, getPrecioTotal}}>
            {children}
        </CartContext.Provider>
    )
}

