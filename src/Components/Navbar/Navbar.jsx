// Navbar.js
import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [activeMenu, setActiveMenu] = useState("menu");
  const { getTotalCartAmount } = useContext(StoreContext); // Correctly destructure

  return (
    <div className="navbar">
      <Link to='/'><img src={assets.logo} alt="logo" className="logo" /></Link>
      <ul className="navbar-menu">
        <li>
          <Link
            to="/"
            onClick={() => setActiveMenu("Home")}
            className={activeMenu === "Home" ? "active" : ""}
          >
            Home
          </Link>
        </li>
        <li>
          <a
            href="#explore-menu"
            onClick={() => setActiveMenu("Menu")}
            className={activeMenu === "Menu" ? "active" : ""}
          >
            Menu
          </a>
        </li>
        <li>
          <a
            href="#app-download"
            onClick={() => setActiveMenu("Mobile-app")}
            className={activeMenu === "Mobile-app" ? "active" : ""}
          >
            Mobile-app
          </a>
        </li>
        <li>
          <a
            href="#footer"
            onClick={() => setActiveMenu("Contact Us")}
            className={activeMenu === "Contact Us" ? "active" : ""}
          >
            Contact Us
          </a>
        </li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="search icon" />
        <div className="navbar-search-icon">
          <Link to='/cart'><img src={assets.basket_icon} alt="basket icon" /></Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>Signin</button>
      </div>
    </div>
  );
};

export default Navbar;

