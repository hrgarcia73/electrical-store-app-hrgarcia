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
            const newList = [...productCartList, item];
            setProductCartList(newList);
        }else{
            const auxArray = [...productCartList]
            const itemId = parseInt(item.id)
            let product = auxArray.find(el => el.id === item.id)
            product.cantidad = product.cantidad + item.cantidad
            //console.log("el array auxiliar: ",auxArray)
            let newArray = auxArray.filter(item => item.id !== itemId)
            //console.log("el nuevo array sin el item: ",newArray)
            const newList = [...newArray, product]
            setProductCartList(newList);
            console.log("la nueva lista con item modificado: ", newList)
        }
    }

    return(
        <CartContext.Provider value={{productCartList, addItem, removeItem, clear}}>
            {children}
        </CartContext.Provider>
    )
}

