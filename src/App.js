import logo from './logo-novaware.gif';
import NavBar from './components/NavBar/NavBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo novaware" />
        <NavBar/>
      </header>
    </div>
  );
}

export default App;
