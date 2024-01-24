import logo from './logo.svg';
import './App.css';
import Welcome from './Components/Welcome';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Welcome mensaje="hola mensaje props" name="DYLAN"></Welcome> */}
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/" >Home</Link>
              </li>
              <li>
                <Link to="/contact" >Contacto</Link>
              </li>
            </ul>
          </div>
        </Router>

      </header>
    </div>
  );
}

export default App;
