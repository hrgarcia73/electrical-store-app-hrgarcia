import './ItemListContainer.css';
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = ({greeting}) =>{
  return (
    <div className='list'>
      {greeting}
      <ItemCount 
        stock={10} 
        initial={1} 
        onAdd={(n)=> alert(`Agregados ${n} productos`)}/>
    </div>
  )
}

export default ItemListContainer