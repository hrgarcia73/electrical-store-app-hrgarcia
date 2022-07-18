import NavBar from './components/NavBar/NavBar';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">  
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element= {<ItemListContainer greeting={"Soy el ItemListContainer"}/>} />
        </Routes>
      </BrowserRouter>    

    </div>
  );
}

export default App;
