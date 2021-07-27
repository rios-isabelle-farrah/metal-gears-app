// import logo from './Images/metal.png';

import './App.css';
// import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
 import NavBar from './Components/NavBar.js';
 import Home from './Components/Home.js';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            {/* <Route exact path="/gears">
              <Index />
            </Route> */}
     
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
