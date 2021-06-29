import React, { useState, useEffect } from "react";
import Home from "./components/pages/Home/Home";
import NavMenu from "./components/NavMenu/NavMenu";
import Signup from "./components/Signup/Signup";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import withAuth from "./components/higher-order-component/withAuth";
import Dashboard from "../src/components/pages/Dashboard";
import Discover from "../src/components/pages/Discover/Discover"
// import Login from "../src/components/pages/Login"    Will need to create folder and files for this route page

function App() {
  //replaced this from jordyn's code, it may be needed for with
  const isLoggedIn = () => {
    return localStorage.getItem("jwtToken") !== null;
  };

  // useState, useEffect, etc.
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  //return code here
  return (
    <Router>
      <div className="app">
        <NavMenu menuOpen={menuOpen} toggleMenu={toggleMenu} />
      </div>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/signup" component={Signup} />
        {/* <Route path="/login" component={Login} /> */} 
        <Route path="/dashboard" component={withAuth(Dashboard)} />
        <Route path="/discover" component={withAuth(Discover)} />
        <Route path="/discover" component={withAuth(Discover)} />
      </Switch>
    </Router>
  );
}

export default App;
