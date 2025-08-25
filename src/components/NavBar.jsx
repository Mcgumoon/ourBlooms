import { Link } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav
        role="navigation"
        aria-label="main navigation"
        className="
          fixed z-[100] bg-white border-b border-black
          flex items-center justify-between
          w-[100vw] md:w-[100vw] py-1 px-5
        "
      >
        {/* logo */}
        <div className="z-50 flex flex-row items-center bg-white w-40">
          {/* small screen brand */}
          <Link to="/">
            <h1 className="block md:hidden font-brand italic font-extrabold text-5xl leading-none">
              O.B
            </h1>
          </Link>
          {/* big screen brand */}
          <Link to="/">
            <h1 className="hidden md:flex font-brand italic font-extrabold text-5xl leading-none">
              Our Blooms
            </h1>
          </Link>
        </div>

        {/* hamburger (mobile only) */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen((v) => !v)}
          className="md:hidden flex flex-col items-end"
        >
          <span
            className={`h-[2px] w-[30px] bg-black rounded-[8px] m-[5px] transition-transform duration-600 ${
              isMenuOpen ? "rotate-[45deg] translate-x-[7px] translate-y-3" : ""
            }`}        />
          <span
            className={`h-[2px] w-[30px] bg-black rounded-[8px] m-[5px] transition-opacity duration-600 ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-[2px] w-[30px] bg-black rounded-[8px] m-[5px] transition-transform duration-600 ${
              isMenuOpen ? "-rotate-[47deg] translate-x-[7px] -translate-y-3" : ""
            }`}
          />
        </button>

        {/* desktop menu */}
        <ul className="hidden md:inline-flex flex-row items-center relative">
          <li className="list-none p-2.5 hover:bg-red-100 transition-colors duration-300 rounded-md">
            <Link className="no-underline text-black p-2.5" to="/gallery">GALLERY</Link>
          </li>
          <li className="list-none p-2.5 hover:bg-red-100 transition-colors duration-300 rounded-md">
            <Link className="no-underline text-black p-2.5" to="/about">ABOUT</Link>
          </li>
          <li className="list-none p-2.5 hover:bg-red-100 transition-colors duration-300 rounded-md">
            <Link className="no-underline text-black p-2.5" to="/contact">CONTACT</Link>
          </li>
        </ul>
      </nav>

      {/* mobile sidemenu (slides under fixed navbar) */}
      <ul
        id="mobile-menu"
        className={`
          md:hidden  z-50 fixed left-0 w-full bg-white border-b border-black px-5 py-5
          transition-all duration-500
          ${isMenuOpen ? "top-[50px] opacity-100 visible" : "top-[-10px] opacity-0 invisible"}
        `}
      >
        <li className="list-none p-2.5 hover:bg-red-100 transition-colors duration-300 rounded-md">
          <Link className="no-underline text-black p-2.5" to="/gallery" onClick={() => setIsMenuOpen(false)}>GALLERY</Link>
        </li>
        <li className="list-none p-2.5 hover:bg-red-100 transition-colors duration-300 rounded-md">
          <Link className="no-underline text-black p-2.5" to="/about" onClick={() => setIsMenuOpen(false)}>ABOUT</Link>
        </li>
        <li className="list-none p-2.5 hover:bg-red-100 transition-colors duration-300 rounded-md">
          <Link className="no-underline text-black p-2.5" to="/contact" onClick={() => setIsMenuOpen(false)}>CONTACT</Link>
        </li>
      </ul>
    </>
  );
};

export default NavBar;
