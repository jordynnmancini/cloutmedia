import React, { useState, useEffect } from "react";
import Home from "./components/pages/Home/Home";
import NavMenu from "./components/NavMenu/NavMenu";
import Signup from "./components/Signup/signup";
import withAuth from "./components/higher-order-component/withAuth";
import Dashboard from "./components/pages/Dashboard/dashboard";
import Discover from "./components/pages/Discover/Discover";
import About from "./components/pages/About/About";
import Contact from "./components/pages/Contact/Contact";
import Login from "./components/Login/login";
import NotFound from "./components/pages/NotFound/NotFound";


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
    
        <NavMenu menuOpen={menuOpen} toggleMenu={toggleMenu} />
      
      <Switch>
        <Route exact path={["/", "/home"]} component={Home} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route path="/dashboard" component={withAuth(Dashboard)} />
        <Route path="/discover" component={withAuth(Discover)} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="*" component={NotFound} />
      </Switch>

    </Router>
  );
}

export default App;
