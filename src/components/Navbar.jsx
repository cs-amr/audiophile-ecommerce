import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Nav from "./Nav";

export default function Navbar() {
  const [navbarToggle, setNavbarToggle] = useState(false);
  return (
    <header>
      <div className="container">
        <img
          onClick={() => setNavbarToggle(!navbarToggle)}
          className="menu-icon"
          src={
            navbarToggle
              ? "/images/shared/tablet/icon-close-menu.svg"
              : "/images/shared/tablet/icon-hamburger.svg"
          }
          alt="menu"
        />
        <Link to="/">
          <img src="/images/shared/desktop/logo.svg" alt="" />
        </Link>
        <nav>
          <ul>
            <li>
              <NavLink to="/">HOME</NavLink>
            </li>
            <li>
              <NavLink to="headphones">HEADPHONES</NavLink>
            </li>
            <li>
              <NavLink to="speakers">SPEAKER</NavLink>
            </li>
            <li>
              <NavLink to="earphones">EARPHONES</NavLink>
            </li>
          </ul>
        </nav>
        <img
          className="cart"
          src="/images/shared/desktop/icon-cart.svg"
          alt="cartIcon"
        />
        <Nav navbarToggle={navbarToggle} />
      </div>
    </header>
  );
}
