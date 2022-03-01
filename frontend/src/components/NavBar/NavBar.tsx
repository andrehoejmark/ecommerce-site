import React from "react";
import styled from "styled-components"
import {Link} from "react-router-dom";

import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'



interface Props {}

export const NavBar: React.FC<Props> = () => {

    const productID = useSelector((state: RootState) => state.Cart.productID)


  return (
        <Wrapper>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Lit Candles</a>
                    <Link to="/">
                        <img className="myimage" src="candle3.png"/>
                    </Link>
                    
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>

                        <form className="d-flex">
                            <Link to="/cart">
                                <img className="cart" src="cart.png"></img>
                            </Link>

                            <span className="position-absolute translate-middle badge rounded-pill bg-danger">
                                {
                                    productID.length
                                
                                }
                                <span className="visually-hidden">unread messages</span>
                            </span>


                        </form>
                    </div>
                </div>
            </nav>
        </Wrapper>
    );
};


const Wrapper = styled.div`
@-webkit-keyframes thumb {
    0% { -webkit-transform: rotate(3deg); }
    50% { -webkit-transform: rotate(-3deg); }
    100% { -webkit-transform: rotate(3deg); }
}

.myimage:hover{
	-webkit-animation-name: thumb;
    -webkit-animation-duration: 1000ms;
    -webkit-transform-origin:50% 50%;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-timing-function: linear;
}

.cart{
	height: 35px;
	width: 37px;
}

.cart:hover{
	-webkit-animation-name: thumb;
    -webkit-animation-duration: 1000ms;
    -webkit-transform-origin:50% 50%;
    -webkit-animation-iteration-count: infinite;
}


`
