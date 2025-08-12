import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <h1>O.B</h1>
            </div>

            <ul className="menu">
                <li><Link to="/gallery">GALLERY</Link></li>
                <li><Link to="/about">ABOUT</Link></li>
                <li><Link to="contact">CONTACT</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar;