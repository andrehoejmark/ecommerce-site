import React, { useState, useEffect } from "react";
import {API_URL} from "./../../config/index"

import styled from "styled-components"
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, removeFromCart } from '../../redux/cartSlice'
import { RootState } from '../../redux/store'
import axios from 'axios';

interface ProductDisplayProps{

}

const ProductDisplay: React.FC<ProductDisplayProps> = () => {
    
    const productID = useSelector((state: RootState) => state.Cart.productID)
    const dispatch = useDispatch()

    const handleSubmit = (e:any, productID:any) => {
        e.preventDefault();

        const url = API_URL + '/payments/create-checkout-session'
    
        var bodyFormData = new FormData();

        for(var i = 0; i < productID.length; i++) {
            bodyFormData.append("productIDS", productID[i])
        }
        
        axios.post(url, bodyFormData, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            }
        }).then(res => {

            console.log("success")
            console.log(res.data)

        }).catch(err => {
            console.log(err)
        })

        
    }

    return(
        <Wrapper>
            <div className="container">
                <h2>List of Products</h2>

                {console.log(productID)}                

                <ul className="list-group">
                {
                    productID.map((productID) => {
                        {console.log(productID)}
                        
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
                        <button type="button" className="btn btn-primary btn-lg" onClick={(e) => handleSubmit(e, productID)}> Continue to checkout</button>
                    </div>
                </div>

            </div>
        </Wrapper>
    )
};


interface MessageProps {
    message: string;
}

const Message: React.FC<MessageProps> = ({ message }) => (
    <section>
      <p>{message}</p>
    </section>
);



interface CartProps {
    token:string|null
}

export const Cart: React.FC<CartProps> = () => {

    const [message, setMessage] = useState<string>("");

    useEffect(() => {
        // Check to see if this is a redirect back from Checkout
        const query = new URLSearchParams(window.location.search);
        
        console.log("query")
        console.log(query)
        
        if (query.get("success")) {
          setMessage("Order placed! You will receive an email confirmation.");
        }
    
        if (query.get("canceled")) {
          setMessage(
            "Order canceled -- continue to shop around and checkout when you're ready."
          );
        }
      }, []);

    return message ? (
        <Message message={message} />
      ) : (
        <ProductDisplay />
      );
};


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
