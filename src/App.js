import logo from './logo.svg';
import './App.css';
// import Welcome from './Components/Welcome';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Contact from './pages/Contact';
import AboutMe from './pages/AboutMe';
import Profile from './pages/Profile';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/" >Home</Link>
              </li>
              <li>
                <Link to="/contact" >Contacto</Link>
              </li>
              <li>
                <Link to="/about-me" >About Me</Link>
              </li>
              <li>
                <Link to="/profile" >Profile</Link>
              </li>
            </ul>
          </div>
          <Routes>
            <Route path='/contact' element = {<Contact></Contact>}></Route>
            <Route path='/about-me' element = {<AboutMe></AboutMe>}></Route>
            <Route path='/profile/:name' element = {<Profile></Profile>}></Route>
          </Routes>
        </Router>

        
      </header>
    </div>
  );
}

export default App;
