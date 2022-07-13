import logo from '../src/img/logo-novaware.gif';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo novaware" />
        <NavBar/>
      </header>
      {/* <ItemListContainer greeting={"Soy el ItemListContainer"}/>  */}
      <ItemDetailContainer />
    </div>
  );
}

export default App;
