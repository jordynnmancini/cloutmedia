import React from 'react'
import Topbar from '../topbar/Topbar';
import Menu from '../menu/Menu'
export default function NavMenu({ menuOpen, toggleMenu }) {
    console.log(menuOpen)


    return (
        <div>
            <Topbar menuOpen={menuOpen} toggleMenu={toggleMenu} />
            <Menu menuOpen={menuOpen} toggleMenu={toggleMenu} />
        </div>
    )
}
