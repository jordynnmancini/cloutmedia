import React, { useState, useEffect} from "react";
import Home from "./components/pages/Home/Home";
import NavMenu from "./components/NavMenu/NavMenu";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import withAuth from "./components/higher-order-component/withAuth";
import Dashboard from "../src/components/pages/Dashboard"


function App() {

//replaced this from jordyn's code, it may be needed for with auth
  const isLoggedIn = () => {
    return localStorage.getItem('jwtToken') !== null; 
  }
  
  // useState, useEffect, etc. 
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)

  //return code here
  return (
    <Router>
     <div className="app">
      <NavMenu menuOpen={menuOpen} toggleMenu={toggleMenu} />
     </div>    
        <Switch>
        <Route path="/home" component={Home} />
        <Route path="/dashboard" component={withAuth(Dashboard)} />
        <Route path="/discover" component={withAuth(Dashboard)} />
        <Route path="/dashboard" component={withAuth(Dashboard)} />
        <Route path="/dashboard" component={withAuth(Dashboard)} />
        </Switch>
    </Router>
  );
}



  export default App;