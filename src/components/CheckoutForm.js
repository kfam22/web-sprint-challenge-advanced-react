import React, { useState } from "react";
import useForm from "../hooks/useForm";

const initialValue = {
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  state: "",
  zip: "",
};

const CheckoutForm = (props) => {
  const [values, handleChanges, showSuccessMessage, handleSubmit, input] = useForm(initialValue);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Checkout Form</h2>
        <label>
          First Name:
          <input
            name="firstName"
            value={input.firstName}
            onChange={handleChanges}
          />
        </label>
        <label>
          Last Name:
          <input
            name="lastName"
            value={input.lastName}
            onChange={handleChanges}
          />
        </label>
        <label>
          Address:
          <input
            name="address"
            value={input.address}
            onChange={handleChanges}
          />
        </label>
        <label>
          City:
          <input name="city" value={input.city} onChange={handleChanges} />
        </label>
        <label>
          State:
          <input name="state" value={input.state} onChange={handleChanges} />
        </label>
        <label>
          Zip:
          <input name="zip" value={input.zip} onChange={handleChanges} />
        </label>
        <button>Checkout</button>
      </form>

      {showSuccessMessage && (
        <div className="success-message" data-testid="successMessage">
          <p> Thanks for your order {values.firstName}! <span role="img">🎉</span></p>
          <p>Your new green friends will be shipped to:</p>
          <br />
          <br />
          <p>
            {values.firstName} {values.lastName}
          </p>
          <p>{values.address}</p>
          <p>
            {values.city}, {values.state} {values.zip}
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
