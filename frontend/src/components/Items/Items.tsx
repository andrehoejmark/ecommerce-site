import React from "react";
import styled from "styled-components"
import {useEffect, useState} from "react"
import axios from "axios"
import {Item} from "./Item"


interface itemVariables {
    id: number,
    title: string,
    desc: string,
    price: number,
    image: string
}

interface Props {
}

export const Items: React.FC<Props> = (props) => {

    const [items, setItems] = useState<Array<itemVariables>>([])
    
    useEffect(() => {
        axios({
            method: "GET",
            url: "http://127.0.0.1:8000/store",
            params: {}
        }).then(res => {
            {console.log(res.data)}
            setItems(res.data)
        }).catch(e => {
            console.log("Error fetching items: " + e)
        })
    }, [])

    return (
            <Wrapper>
                <div className="container">

                    <div className="row">

                        {
                            items.map((item) => {
                                {console.log(item.id)}
                                
                                return (
                                    <div className="col-sm">
                                        <Item key={item.id}
                                            id={item.id}
                                            title={item.title}
                                            desc={item.desc}
                                            img={item.image}
                                            price={item.price ? item.price : 0}
                                            />
                                    </div>)
                            })
                        }
                    </div>
                </div>
            </Wrapper>
        );
};


const Wrapper = styled.div`

.container{
    margin-top: 100px;
}






`