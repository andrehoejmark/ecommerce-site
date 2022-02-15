import React from "react";
import styled from "styled-components"

import {Cart} from "./../components/Cart/Cart"
import {NavBar} from "./../components/NavBar/NavBar"

interface Props {
  token:string|null
}

export const CartPage: React.FC<Props> = ({token}) => {

  return (
    <Wrapper>
      
      <NavBar/>
      <Cart token={token}/>


    </Wrapper>
    );
};


const Wrapper = styled.div`


`