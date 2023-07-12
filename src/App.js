import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Components/Home/Home';
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'


function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route exact path="/"element={<Home></Home>}/>
    <Route exact path="/About"element={<About></About>}/>
    <Route exact path="/Contact"element={<Contact></Contact>}/>
  </Routes>  
  </BrowserRouter>
  );
}

export default App;
