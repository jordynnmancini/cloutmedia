import "./menu.scss"

export default function Menu({ navMenuOpen, setNavMenuOpen }) {
    return (
        <div className={"menu " + (navMenuOpen && "active")}>
            <ul>
                <li onClick={() => setNavMenuOpen(!navMenuOpen)}>
                    <a href="#intro">Home</a>
                </li>
                <li onClick={() => setNavMenuOpen(!navMenuOpen)}>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li onClick={() => setNavMenuOpen(!navMenuOpen)}>
                    <a href="#works">Works</a>
                </li>
                <li onClick={() => setNavMenuOpen(!navMenuOpen)}>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
            
        </div>
    )
}
