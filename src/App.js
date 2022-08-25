import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer mensaje = 'Aquí está intanciado el ItemListContainer' />
    </div>
  );
}

export default App;
