import React from "react";
import { useCart } from "../Context/CartContext";
import { useDataContext } from "../Context/DataContext";
import { getTotal } from "./Navbar";

export default function Form() {
  const { cartItems, setCartItems } = useCart();
  const { products, isLoading } = useDataContext();
  const total = getTotal(cartItems, products);
  return (
    <form>
      <div className="checkout">
        <h3>CHECKOUT</h3>
        <fieldset>
          <legend>BILLING DETAILS</legend>
          <label>
            Name
            <input type="text" placeholder="Alexei Ward" required />
          </label>
          <label>
            Email Address
            <input type="email" placeholder="alexei@mail.com" required />
          </label>
          <label>
            Phone Number
            <input type="number" placeholder="+1 202-555-0136" required />
          </label>
        </fieldset>
        <fieldset>
          <legend>SHIPPING INFO</legend>
          <label>
            Your Address
            <input type="text" placeholder="1137 Williams Avenue" />
          </label>
          <label>
            ZIP Code
            <input type="number" placeholder="10001" />
          </label>
          <label>
            City
            <input placeholder="New York" type="text" />
          </label>
          <label>
            Country
            <input type="text" placeholder="United States" />
          </label>
        </fieldset>
        <fieldset>
          <legend>PAYMENT DETAILS</legend>
          <div className="pay-method">
            <div>
              <input
                type="radio"
                id="emoney"
                name="pay-method"
                value="emoney"
              />
              <label htmlFor="emoney">e-Money</label>
            </div>
            <div>
              <input type="radio" id="cash" name="pay-method" value="cash" />
              <label htmlFor="cash">Cash</label>
            </div>
          </div>

          <div>
            <label>
              e-Money Number
              <input type="number" placeholder="238521993" />
            </label>
            <label>
              e-Money Pin
              <input type="number" placeholder="6891" />
            </label>
          </div>
        </fieldset>
      </div>

      <div className="summary">
        <h4>SUMMARY</h4>
        <ul>
          {cartItems.map((item, index) => {
            const product = products.products.find(
              (productItem) => item.slug === productItem.slug
            );
            return (
              <li key={index}>
                <img src={product.cartImage} alt="" />
                <div>
                  <p>{product.shortName}</p>
                  <p>${product.price * item.productCount}</p>
                </div>
                <p>x{item.productCount}</p>
              </li>
            );
          })}
        </ul>

        <div className="total">
          <p>Total</p>
          <p>${total}</p>
        </div>
        <div className="shipping">
          <p>SHIPPING</p>
          <p>$50</p>
        </div>
        <div className="vat">
          <p>VAT (INCLUDED)</p>
          <p>${total * 0.14}</p>
        </div>
        <div className="grand-total">
          <p>GRAND TOTAL</p>
          <p>${total + 50 + total * 0.14}</p>
        </div>
        <button className="link">CONTINUE & PAY</button>
      </div>
    </form>
  );
}
