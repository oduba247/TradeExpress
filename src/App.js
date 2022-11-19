import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import NavBar from './component/NavBar';
import Home2 from './component/Home2';
import {BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
     
     <BrowserRouter>
    <div className="Header-section1"> <NavBar/></div>
     <Routes>
      <Route path='Home' index element ={ <Home/>}/>
      <Route path='BuySell' index element ={ <Home2/>}/>

     </Routes>
     </BrowserRouter>
    
    </div>
  );
}

export default App;
