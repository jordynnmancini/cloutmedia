import React, { useState, useEffect} from "react";
import Topbar from "./components/topbar/Topbar";
import Menu from "./components/menu/Menu";
import Home from "./components/pages/Home/Home";
function App() {

  // useState, useEffect, etc. 
  const [menuOpen, setMenuOpen] = useState(false)

  //return code here
  return (<>
   <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
      <Home />
     </div>    
    </div>
  </>);
}

export default App;
