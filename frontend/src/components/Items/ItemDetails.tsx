import React from "react";
import styled from "styled-components"



interface Props {}

export const ItemsDetails: React.FC<Props> = () => {

  return (
        <Wrapper>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <h6>Candle1</h6>
                        $11.99 <br></br>
                        Buy Now
                    </div>

                    <div className="col-sm">
                        <h6>Candle2</h6>
                        $11.99 <br></br>
                        Buy Now
                    </div>

                    <div className="col-sm">
                        <h6>Candle3</h6>
                        $11.99 <br></br>
                        Buy Now
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};


const Wrapper = styled.div`



`