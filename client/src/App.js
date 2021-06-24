import React, { useState, useEffect} from "react";
import NavMenu from "./components/exampleComponent/NavMenu/NavMenu";
import Topbar from "./components/exampleComponent/NavMenu/topbar/Topbar";
import Menu from "./components/exampleComponent/NavMenu/menu/Menu";
function App() {

  // useState, useEffect, etc. 
  const [menuOpen, setMenuOpen] = useState(false)

  //return code here
  return (<>
   <div className="app">
      body component and add in the other page components into it ie. the image etc(possible modals)
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div>
       //insert sections for the page
     </div>    
    </div>
  </>);
}

export default App;
