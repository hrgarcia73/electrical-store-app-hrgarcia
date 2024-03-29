import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartContainer } from './components/CartContainer/CartContainer';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter >
          <NavBar/>
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/productos" element={<ItemListContainer />} />
            <Route path="/productos/:categoria" element={<ItemListContainer />}/>
            <Route path="/item/:id" element={<ItemDetailContainer itemId = {1} /> }/>
            <Route path='/cart' element={<CartContainer />} />
            <Route path='*' element={<ItemListContainer />}/>
          </Routes>   
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
