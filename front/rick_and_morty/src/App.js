import './App.css';
import { Route,Routes, useLocation } from 'react-router-dom';
import Landing from "./components/Elements/Main/Main"
import {CardsPag} from "./components/Elements/Cards/CardsPag"
import About from "./components/Elements/About/About"
import Nav from "./components/Elements/Nav/Navbar"
import Form from './components/Elements/Form/Form';
import Detail from './components/Elements/Detail/Detail';

function App() {
  const {pathname} = useLocation()

  return (
    <div className="App"> 
    {pathname !=="/" && <Nav></Nav>}
      <div className='divRoutes'>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/card' element={<CardsPag/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/login' element={<Form/>}/>
          <Route path='/detail/:id' element={<Detail/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
