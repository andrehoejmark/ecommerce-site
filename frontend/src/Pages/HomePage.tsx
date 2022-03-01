import React from "react";
import styled from "styled-components"

import {Items} from "./../components/Items/Items"
import {NavBar} from "./../components/NavBar/NavBar"


interface Props {}

export const HomePage: React.FC<Props> = () => {

  return (
    <Wrapper>
      
      <NavBar/>
      <Items/>

    </Wrapper>
    );
};


const Wrapper = styled.div`


`