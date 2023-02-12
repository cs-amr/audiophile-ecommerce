import React from "react";

export default function Form() {
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
            <input type="New York" />
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
              <label htmlfor="emoney">e-Money</label>
            </div>
            <div>
              <input type="radio" id="cash" name="pay-method" value="cash" />
              <label htmlFor="cash">Cash</label>
            </div>
          </div>

          <div>
            <label>
              <input type="text" />
            </label>
            <label>
              <input type="text" />
            </label>
          </div>
        </fieldset>
      </div>

      <div className="summary">
        <h4>SUMMARY</h4>
      </div>
    </form>
  );
}
