import React, { useState, useEffect } from "react";
import Home from "./components/pages/home/home";
import NavMenu from "./components/navMenu/navMenu";
import Signup from "./components/signup/signup";
import withAuth from "./components/higher-order-component/withAuth";
import Dashboard from "./components/pages/dashboard/dashboard";
import Discover from "./components/pages/discover/discover";
import About from "./components/pages/about/about";
import Contact from "./components/pages/contact/contact";
import Login from "./components/login/login";
import NotFound from "./components/pages/notFound/notFound";


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
