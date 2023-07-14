import './App.css';
import React, {useState} from 'react';
import Contact from './components/contact';
import Navbar  from './components/navbar';
import Resume from './components/resume';
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
function App() {
  const [shazam,setshazam]= useState(" page5 ")
  const openclickfun=()=>{
    setshazam("page5 shazam5");
  }
  const closeclickfun=()=>{
    setshazam("page5");
  }
  return (
    <>
     
    <Router>
      <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/">
          <Navbar openclick={openclickfun} tilteffect={shazam} closeclick={closeclickfun} />

          </Route>
        </Switch>
   </Router>
   </>
  );
}

export default App;
