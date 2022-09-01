import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer mensaje = 'Aquí está intanciado el ItemListContainer' />
      <ItemDetailContainer itemId = '1' />
    </div>
  );
}

export default App;
