import React from "react";
import styled from "styled-components"

import {Cart} from "./../components/Cart/Cart"
import {StripeCheckout} from "./../components/Cart/StripeCheckout"
import {NavBar} from "./../components/NavBar/NavBar"

interface Props {
}

export const CartPage: React.FC<Props> = () => {

  return (
    <Wrapper>
      
      <NavBar/>
      <StripeCheckout/>


    </Wrapper>
    );
};


const Wrapper = styled.div`


`