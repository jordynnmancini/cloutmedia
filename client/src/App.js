import React, { useState, useEffect } from "react";
import Home from "./components/pages/Home/Home";
import NavMenu from "./components/NavMenu/NavMenu";
import Signup from "../src/components/Signup/Signup";
import withAuth from "./components/higher-order-component/withAuth";
import Dashboard from "../src/components/pages/Dashboard";
import Discover from "../src/components/pages/Discover/Discover";
import About from "../src/components/pages/About/About";
import Contact from "../src/components/pages/Contact/Contact";
import Login from "../src/components/Login/Login" 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
;
  
function App() {
  //replaced this from jordyn's code, it may be needed for with
  const isLoggedIn = () => {
    return localStorage.getItem("jwtToken") !== null;
  };

  // useState, useEffect, etc.
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  //use effect to render home screen on open

  //return code here
  return (
    <Router>
      <div className="app">
        <NavMenu menuOpen={menuOpen} toggleMenu={toggleMenu} />
      </div>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={withAuth(Dashboard)} />
        <Route path="/discover" component={withAuth(Discover)} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
