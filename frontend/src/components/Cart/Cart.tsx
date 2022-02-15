import React from "react";
import {API_URL} from "./../../config/index"

import styled from "styled-components"
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, removeFromCart } from '../../redux/cartSlice'
import { RootState } from '../../redux/store'
import axios from 'axios';


interface CartProps {
    token:string|null
}
export const Cart: React.FC<CartProps> = ({token}) => {

    const handleSubmit = (e:any, productID:any) => {
        e.preventDefault();


        const url = API_URL + '/payments/create-checkout-session'
        
        console.log(url)

        let data = {
            "productIDS": productID,
        }

        console.log("Csrf token")
        console.log(token)

        axios.post(url, data, {
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


    const productID = useSelector((state: RootState) => state.Cart.productID)
    const dispatch = useDispatch()
    return (
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
