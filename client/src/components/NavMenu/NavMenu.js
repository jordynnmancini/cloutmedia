import React from 'react'
import Topbar from '../topbar/topbar';
import Menu from '../menu/menu'
export default function NavMenu({ menuOpen, toggleMenu }) {
    console.log(menuOpen)


    return (
        <div>
            <Topbar menuOpen={menuOpen} toggleMenu={toggleMenu} />
            <Menu menuOpen={menuOpen} toggleMenu={toggleMenu} />
        </div>
    )
}
