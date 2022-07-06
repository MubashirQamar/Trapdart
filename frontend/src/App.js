import { useState } from 'react';
import './App.css';
import { Footer, Header } from './components';
import { useEagerConnect, useInactiveListener } from './hooks/useEagerConnect';
import { About, Artist, BuyTrap, Gallery, Home, TrapIco, Vote} from './screens';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';


function App() {
  const [errorMessage, setErrorMessage] = useState();
  useEagerConnect(setErrorMessage);
  useInactiveListener();
  
  return (
    <>
      {/* {
        errorMessage? <div style={{color:"red"}}>{errorMessage}</div>: null
      } */}
      <Router>
       <Header setErrorMessage={setErrorMessage}/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/vote' element={<Vote/>}/>
          <Route path='/artist' element={<Artist/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/trap' element={<TrapIco/>}/>
          <Route path='/buy-trap' element={<BuyTrap/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
          
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
