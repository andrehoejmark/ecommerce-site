import React from "react";
import styled from "styled-components"

import { useSelector, useDispatch } from 'react-redux'
import { addToCart, removeFromCart } from '../../redux/cartSlice'
import { RootState } from '../../redux/store'


interface Props {
    id: number,
    title: string,
    img: string,
    desc: string,
    price: number
}

export const Item: React.FC<Props> = (props) => {

    const productID = useSelector((state: RootState) => state.Cart.productID)
    const dispatch = useDispatch()
    
    return (
            <Wrapper>
                <div className="item">
                    <image className="img">
                        {props.img ? <img src={props.img} style={{ objectFit: "cover", width: '100%', height: '300px', borderTopLeftRadius: "12px", borderTopRightRadius: "12px" }} id="img" className="img" alt='image'/> : <img src="candle3.png" style={{ objectFit: "cover", width: '100%', height: '170px', borderTopLeftRadius: "12px", borderTopRightRadius: "12px" }} className='fas fa-home'/>}
                    </image>

                    <div className="text">
                        <b>{String(props.title).slice(0, 27)}</b><br/>
                        <div className="desc">{String(props.desc).slice(0, 75)}</div>
                        
                        
                        <div className="row">
                            <div className="col-sm">
                                <b className="price">{String(props.price).slice(0, 7)} </b> sek
                            </div>

                            <div className="col-auto">
                                
                                <div className="Add-To-Cart" onClick={() => dispatch(addToCart(props.id))}>
                                    <b> Add to cart </b>
                                </div>
                                

                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        );
};


const Wrapper = styled.div`

.col-auto{

    color: yellow;
    background-color: black;
    margin-right: 20px;
    border-radius: 5px;
}

.desc{
    width: 98%;
    height: 70px;
    white-space : normal;
    overflow-wrap: break-word;
}

.item{
    width: 300px;
    height 440px;
    font-size: 50px;
    border-radius: 12px;
    border:0.01rem solid rgba(0,0,0,0.2);
    box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
    background-color: white;
    margin-bottom: 18px;
}

.item:hover{
    transition:all 0.1s linear;
    transform: scale(1.01);

}

.img{
    display: inline-block;
    text-align: center;
    width: 100%;
    border-bottom:0.1rem solid rgba(0,0,0,0.2);
}

.text{
    font-size: 15px;
    margin-left: 5px;
    margin-top:3px;
}

`