import React from "react";
import styled from "styled-components"

import {Cart} from "./../components/Cart/Cart"
import {NavBar} from "./../components/NavBar/NavBar"
import {StripeCheckout} from "./../components/Cart/StripeCheckout"

interface Props {}

export const CheckoutPage: React.FC<Props> = () => {

  return (
    <Wrapper>
      
      <StripeCheckout/>

    </Wrapper>
    );
};


const Wrapper = styled.div`


`