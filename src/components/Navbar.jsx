import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import { useDataContext } from "../Context/DataContext";
import Nav from "./Nav";

export default function Navbar() {
  const [navbarToggle, setNavbarToggle] = useState(false);
  const { cartItems, setCartItems } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const productCount = cartItems.reduce(
    (productCount, item) => productCount + item.productCount,
    0
  );
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  async function fetchData() {
    const res = await fetch("../products.json");
    const data = await res.json();
    setIsLoading(false);
    setProducts(data);
  }

  useEffect(() => {
    fetchData();
  }, []);
  const total = getTotal(cartItems, products);
  const navigate = useNavigate();
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
                <button
                  onClick={() => {
                    setCartItems([]);
                  }}
                >
                  Remove All
                </button>
              </div>
              <ul className="cart-products">
                {cartItems.map((item, index) => {
                  const product = products.products.find(
                    (productItem) => item.slug === productItem.slug
                  );
                  return (
                    <li key={index}>
                      <img src={product.cartImage} alt="" />
                      <h5>
                        <p>{product.shortName}</p>
                        <p>${product.price * item.productCount}</p>
                      </h5>
                      <div className="btns">
                        <button
                          onClick={() => {
                            if (item.productCount == 1) {
                              removeItem(cartItems, setCartItems, product);
                            } else {
                              handelDecrement(cartItems, setCartItems, product);
                            }
                          }}
                        >
                          -
                        </button>
                        <p>{item.productCount}</p>
                        <button
                          onClick={() => {
                            handelIncreament(cartItems, setCartItems, product);
                          }}
                        >
                          +
                        </button>
                      </div>
                    </li>
                  );
                })}
              </ul>
              <div className="total">
                <p>Total</p>
                <p>${total}</p>
              </div>
              <button
                onClick={() => {
                  navigate("/checkout");
                  setIsCartOpen(false);
                }}
                className="link"
              >
                CHECKOUT
              </button>
            </div>
          ) : (
            <p>Your Cart is Empty</p>
          )}
        </div>
      </div>
    </header>
  );
}

export function getTotal(cartItems, products) {
  const total = cartItems.reduce((total, current) => {
    const product = products.products.find(
      (productItem) => current.slug === productItem.slug
    );
    return total + product.price * current.productCount;
  }, 0);
  return total;
}
function handelIncreament(cartItems, setCartItems, product) {
  const items = cartItems.map((item) => {
    if (item.slug === product.slug) {
      return {
        slug: item.slug,
        productCount: item.productCount + 1,
      };
    } else {
      return item;
    }
  });
  setCartItems(items);
}
function handelDecrement(cartItems, setCartItems, product) {
  const items = cartItems.map((item) => {
    if (item.slug === product.slug) {
      return {
        slug: item.slug,
        productCount: item.productCount - 1,
      };
    } else {
      return item;
    }
  });
  setCartItems(items);
}
function removeItem(cartItems, setCartItems, product) {
  const items = cartItems.filter((item) => item.slug !== product.slug);
  setCartItems(items);
}
