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

export const Items: React.FC<Props> = () => {

    const [items, setItems] = useState<Array<itemVariables>|null>(null)
    
    const getProducts = () =>{
        axios({
            method: "GET",
            url: "http://127.0.0.1:8000/store",
            params: {}
        }).then(res => {
            {console.log(res.data.items)}
            setItems(res.data.items)

            console.log("items:", items)
        }).catch(e => {
            // Dynamically show some message instead of the items
            console.log("Error fetching items: " + e)
        })
    }

    useEffect(() => {
        getProducts()
    }, [])


    if (items == null){
        return(
            <span data-testid="loading">Loading data... <p>{items}</p></span>
        )
    }

    else{
        return (
            <Wrapper>
                <div className="container">

                    <div className="row">

                        {
                            items.map((item) => {
                                {console.log(item.id)}
                                
                                return (
                                    <div  key={item.id} data-testid="resolved" className="col-sm">
                                        <Item
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
    }
};


const Wrapper = styled.div`

.container{
    margin-top: 100px;
}






`