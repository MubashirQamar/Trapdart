import { useState } from 'react';
import './App.css';
import {  Header,GetSubscription } from './components';
import { useEagerConnect, useInactiveListener } from './hooks/useEagerConnect';
import { Home} from './screens';
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
          <Route path='/get-subscription' element={<GetSubscription/>}/>
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
