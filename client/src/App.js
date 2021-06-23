import React, { useState } from "react";
import Topbar from "./components/exampleComponent/topbar/Topbar"
import Menu from "./components/exampleComponent/menu/Menu"
function App() {

  // useState, useEffect, etc. 
  const [menuOpen, setMenuOpen] = useState(true)

  //return code here
  return (<>
   <div className="app">
      body component and add in the other page components into it ie. the image etc(possible modals)

      <Topbar menuOpen={menuOpen}  setMenuOpen={setMenuOpen}/>
     <Menu menuOpen={menuOpen}  setMenuOpen={setMenuOpen}/>
      <div>
       //insert sections for the page
     </div>    
    </div>
  </>);
}

export default App;
