import React, { useState, useEffect } from "react";
import {API_URL} from "./../../config/index"
import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

const ProductDisplay = () => (
  <section>
    <div className="product">
      <img
        src="https://i.imgur.com/EHyR2nP.png"
        alt="The cover of Stubborn Attachments"
      />
      <div className="description">
      <h3>Stubborn Attachments</h3>
      <h5>$20.00</h5>
      </div>
    </div>

    {console.log(API_URL)}
    <form action={API_URL + "/payments/create-checkout-session"} method="POST">
      <button type="submit">
        Checkout
      </button>
    </form>
  </section>
);

interface MessageProps {
    message: string;
}

const Message: React.FC<MessageProps> = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

interface StipeCheckoutProps{}

export const StripeCheckout: React.FC<StipeCheckoutProps> = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
        console.log("Order success")
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
      console.log("Order canceled")
    }
  }, []);

  return message ? (
    <Message message={message} />
  ) : (
    <ProductDisplay />
  );
}