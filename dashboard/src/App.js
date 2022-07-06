import { useState } from 'react';
import './App.css';
import {SideBar,Header} from './components/Index';
import {AddVote, Burn, Home, ListVote, Release, Sale} from './screens/Index';
import { useEagerConnect, useInactiveListener } from './hooks/useEagerConnect';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';


function App() {
  const [errorMessage, setErrorMessage] = useState();
  useEagerConnect(setErrorMessage);
  useInactiveListener();

  return (
    <div className="App main-body">
      {/* {
        errorMessage? <div style={{color:"red"}}>{errorMessage}</div>: null
      }
      <Header setErrorMessage={setErrorMessage}/>
      <Home /> */}
      <Router>
      <SideBar />
      <div className="main-section">
        <Header setErrorMessage={setErrorMessage}/>
        <Routes>
        <Route path="/" element={<Home/>}  />
        <Route path="/sale" element={<Sale/>}  />
        {/* <Route path="/burn" element={<Burn/>}  />
        <Route path="/release" element={<Release/>}  /> */}
        <Route path="/add-vote" element={<AddVote/>}  />
        <Route path="/list-vote" element={<ListVote/>}  />
        </Routes>
      </div>
      </Router>
    </div>
  );
}

export default App;
