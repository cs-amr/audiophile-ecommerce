import React, { useEffect, useState } from "react";
import { useCart } from "../Context/CartContext";
import { getTotal } from "./Navbar";

export default function Form() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  async function fetchData() {
    const res = await fetch("/src/products.json");
    const data = await res.json();
    setIsLoading(false);
    setProducts(data);
  }

  useEffect(() => {
    fetchData();
  }, []);
  const { cartItems, setCartItems } = useCart();
  const total = getTotal(cartItems, products);
  const grandTotal = (total + 50 + total * 0.14).toFixed(2);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    zipCode: "",
    city: "",
    country: "",
    paymentMethod: "",
    eMoneyNumber: "",
    eMoneyPin: "",
    grandTotal,
    cartItems,
  });
  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }
  function handleRadio(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    // submitToApi(formData)
    console.log(JSON.stringify(formData));
    setCartItems([]);
  }

  return (
    <form>
      <div className="checkout">
        <h3>CHECKOUT</h3>
        <fieldset>
          <legend>BILLING DETAILS</legend>
          <label>
            Name
            <input
              type="text"
              placeholder="Alexei Ward"
              required
              onChange={handleChange}
              name="name"
              value={formData.name}
            />
          </label>
          <label>
            Email Address
            <input
              type="email"
              placeholder="alexei@mail.com"
              required
              onChange={handleChange}
              name="email"
              value={formData.email}
            />
          </label>
          <label>
            Phone Number
            <input
              type="number"
              placeholder="+1 202-555-0136"
              required
              onChange={handleChange}
              name="phoneNumber"
              value={formData.phoneNumber}
            />
          </label>
        </fieldset>
        <fieldset>
          <legend>SHIPPING INFO</legend>
          <label>
            Your Address
            <input
              type="text"
              placeholder="1137 Williams Avenue"
              name="address"
            />
          </label>
          <label>
            ZIP Code
            <input
              type="number"
              placeholder="10001"
              required
              onChange={handleChange}
              name="zipCode"
              value={formData.zipCode}
            />
          </label>
          <label>
            City
            <input
              placeholder="New York"
              type="text"
              required
              onChange={handleChange}
              name="city"
              value={formData.city}
            />
          </label>
          <label>
            Country
            <input
              type="text"
              placeholder="United States"
              required
              onChange={handleChange}
              name="country"
              value={formData.country}
            />
          </label>
        </fieldset>
        <fieldset>
          <legend>PAYMENT DETAILS</legend>
          <div className="pay-method">
            <input
              type="radio"
              id="emoney"
              name="paymentMethod"
              value="emoney"
              onChange={handleRadio}
            />
            <label htmlFor="emoney">e-Money</label>
            <br />
            <input
              type="radio"
              id="cash"
              name="paymentMethod"
              value="cash"
              onChange={handleRadio}
            />
            <label htmlFor="cash">Cash On Delivery</label>
          </div>
          {formData.paymentMethod === "emoney" ? (
            <div>
              <label>
                e-Money Number
                <input
                  type="number"
                  placeholder="238521993"
                  onChange={handleChange}
                  name="eMoneyNumber"
                  value={formData.eMoneyNumber}
                />
              </label>
              <label>
                e-Money Pin
                <input
                  type="number"
                  placeholder="6891"
                  onChange={handleChange}
                  name="eMoneyPin"
                  value={formData.eMoneyPin}
                />
              </label>
            </div>
          ) : (
            <p>
              The ‘Cash on Delivery’ option enables you to pay in cash when our
              delivery courier arrives at your residence. Just make sure your
              address is correct so that your order will not be cancelled.
            </p>
          )}
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
          <p>${(total * 0.14).toFixed(2)}</p>
        </div>
        <div className="grand-total">
          <p>GRAND TOTAL</p>
          <p>${grandTotal}</p>
        </div>
        <button onClick={handleSubmit} type="submit" className="link">
          CONTINUE & PAY
        </button>
      </div>
    </form>
  );
}
