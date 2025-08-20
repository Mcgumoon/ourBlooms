import { Link } from "react-router-dom";
import "./NavBar.css";
import { useState } from "react";

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="logo">
                <Link to="/"><h1 id="smallscreen">O.B</h1></Link>
                <Link to="/"><h1 id="bigscreen">Our Blooms</h1></Link>
            </div>

            <button
                type="button"
                className={`hamburger ${isMenuOpen ? 'is-active' : ""}`}
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
                aria-controls="menu"
                onClick={() => setIsMenuOpen(!isMenuOpen)}

            >
                <div className="hamburgerbutton" />
                <div className="hamburgerbutton" />
                <div className="hamburgerbutton" />

            </button>

            <ul
                id="menu"
                className={`menu`}
            >
                <li><Link to="/gallery">GALLERY</Link></li>
                <li><Link to="/about">ABOUT</Link></li>
                <li><Link to="/contact">CONTACT</Link></li>
            </ul>

            <ul
                id="sidemenu"
                className={`sidemenu ${isMenuOpen ? 'is-active' : ""}`}
            >
                <li><Link to="/gallery">GALLERY</Link></li>
                <li><Link to="/about">ABOUT</Link></li>
                <li><Link to="/contact">CONTACT</Link></li>
            </ul>

        </nav>
    )
}

export default NavBar;