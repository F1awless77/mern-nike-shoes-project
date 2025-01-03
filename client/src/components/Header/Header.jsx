import "./Header.css";
import { useState } from "react";
import { Link } from "react-router";
import { useEffect } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.style.overflow = !menuOpen ? 'hidden' : 'visible';
  };

  useEffect(() => {
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, []);

  return (
    <header>
      <div className="header">
        <div className="logo-wrapper">
          <Link to="/">
            <img className="logo" src="/nike-logo-001.svg" alt="Logo"></img>
          </Link>
        </div>

        {/* Bigger Screen Navbar */}
        <div className="navbar-wrapper">
          <nav className="navbar">
            <ul>
              <li>
                <Link to="/catalog">Products</Link>
              </li>
              <li>
                <Link to="/">Pricing</Link>
              </li>
              <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/">FAQs</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="action-wrapper">
          <button className="action">
            <Link to="/">
              <img
                className="cart-icon"
                src="/cart-icon.svg"
                alt="Account"
              ></img>
            </Link>
          </button>
          <button className="action cart">
            <Link>
              <img
                className="account-icon"
                src="/account-icon.svg"
                alt="Cart"
              ></img>
            </Link>
          </button>

          {/* Mobile Menu Icon */}
          <button className="md:hidden action" onClick={toggleMenu}>
            <img src="/menu-icon.svg" alt="Menu" className="md:hidden menu-icon"></img>
          </button>
        </div>

        {/* Full-Screen Links */}
        <div
          className={`fixed top-0 left-0 w-full h-full bg-white bg-opacity-100 z-50 flex flex-col justify-center items-center text-black space-y-10 text-3xl transition-transform duration-500 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <button
            onClick={toggleMenu}
            className="absolute top-5 right-5 text-black text-4xl"
          >
            ✕
          </button>
          <Link to="/catalog" onClick={toggleMenu}>
            Products
          </Link>
          <Link to="/" onClick={toggleMenu}>
            Pricing
          </Link>
          <Link to="/" onClick={toggleMenu}>
            About
          </Link>
          <Link to="/" onClick={toggleMenu}>
            FAQs
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
