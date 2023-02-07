import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <div className="container">
        <img
          className="menu-icon"
          src="/images/shared/tablet/icon-hamburger.svg"
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
        {/* <Categories/> */}
      </div>
    </header>
  );
}
