import React, { useState, useEffect } from "react";
import {API_URL} from "./../../config/index"

import { useSelector, useDispatch } from 'react-redux'
import { addToCart, removeFromCart } from '../../redux/cartSlice'
import { RootState } from '../../redux/store'

import styled from "styled-components"


interface MessageProps {
    message: string;
}

const Message: React.FC<MessageProps> = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

interface StipeCheckoutProps{}

export const Cart: React.FC<StipeCheckoutProps> = () => {
  const [message, setMessage] = useState("");
  const productID = useSelector((state: RootState) => state.Cart.productID)

  const dispatch = useDispatch()


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

    <Wrapper>
      <div className="container">
          <h2>List of Products</h2>
          
          <ul className="list-group">
          {
              productID.map((productID) => {
                  
                  return (
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                          The productID is: {productID}

                          <span>
                              <button type="button" className="btn-close" aria-label="Close" onClick={() => dispatch(removeFromCart(productID))}></button>
                          </span>
                      </li>
                  )
              })
          }
          </ul>

          <div className="row">
              <div className="col text-center">
              <section>
                <form action={API_URL + "/payments/create-checkout-session"} method="POST">
                  
                    {
                    
                      productID.map((productID) => {
                        
                        return (
                          <input type="hidden" id="productIDS" name="productIDS" value={productID}/>
                        )
                    })
                  }

                  <button type="submit" className="btn btn-primary btn-lg"> 
                    Continue to checkout
                  </button>
                </form>
              </section>
              </div>
          </div>

      </div>
    </Wrapper>


  );
}



const Wrapper = styled.div`

.container{
    margin-top: 100px;
}

.close {
    float: right;
    font-size: 21px;
    font-weight: 700;
    line-height: 1;
    color: #000;
    text-shadow: 0 1px 0 #fff;
    filter: alpha(opacity=20);
    opacity: .2;
  }

.btn{
    margin-top: 50px;
    width: 30%;
}

`
