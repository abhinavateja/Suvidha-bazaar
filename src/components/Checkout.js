import React from "react";
import "./Checkout.css";
import CheckOutImage from "../assets/images/Checkout-Main.png";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__ad" src={CheckOutImage} alt="" />

        <div>
          <h2 className="checkout__title">Your shopping basket</h2>
        </div>
      </div>

      <div className="checkout__right">
        <h2>Subtotal will go here</h2>
      </div>
    </div>
  );
}

export default Checkout;
