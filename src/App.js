import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/productos" element={<ItemListContainer />} />
          <Route path="/productos/:categoria" element={<ItemListContainer />}/>
          <Route path="/item/:id" element={<ItemDetailContainer itemId = {1} /> }/>
          <Route path='*' element={<ItemListContainer />}/>
        </Routes>
        
        
      </BrowserRouter>
    </div>
  );
}

export default App;
