import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import Nav from "./Nav";

export default function Navbar() {
  const [navbarToggle, setNavbarToggle] = useState(false);
  const { cartItems, setCartItems } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const productCount = cartItems.reduce(
    (productCount, item) => productCount + item.productCount,
    0
  );
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
        <div
          className="cartIconContainer"
          onClick={() => {
            setIsCartOpen(true);
          }}
        >
          <img
            className="cart-icon"
            src="/images/shared/desktop/icon-cart.svg"
            alt="cartIcon"
          />
          <div className="itemsCount">{productCount}</div>
        </div>
        <Nav navbarToggle={navbarToggle} />
      </div>
      <div
        className={isCartOpen ? "cartContainer open" : "cartContainer"}
        onClick={() => {
          setIsCartOpen(false);
        }}
      >
        <div
          className={isCartOpen ? "cart open" : "cart"}
          onClick={(e) => e.stopPropagation()}
        >
          {productCount ? (
            <div>
              <div className="cart-head">
                <h4>CART({productCount})</h4>
                <button>Remove All</button>
              </div>
              <ul className="cart-products">
                <li>
                  <img src="/images/cart/image-xx59-headphones.jpg" alt="" />
                  <h5>
                    <p>XX9 MK ii</p>
                    <p>$2.999</p>
                  </h5>
                  <div className="btns">
                    <button>-</button>
                    <p>2</p>
                    <button>+</button>
                  </div>
                </li>
              </ul>
              <div className="total">
                <p>Total</p>
                <p>$6516</p>
              </div>
              <div className="link">CHECKOUT</div>
            </div>
          ) : (
            <p>Your Cart is Empty</p>
          )}
        </div>
      </div>
    </header>
  );
}
