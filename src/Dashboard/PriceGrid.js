import React from 'react';
import {AppContext} from '../App/AppProvider';
import styled from 'styled-components';
import PriceTile from '../Dashboard/PriceTile';
const PriceGrid = styled.div`
    display:grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap:15px;
    margin-top:40px;
`
export default ()=>{
    
    return (<AppContext.Consumer>
            {({price})=>(price.length && 
            <PriceGrid>
                {price.map((p,index)=>
                <PriceTile key={index} index={index} price={p}>{p}</PriceTile>)}
            </PriceGrid>
            )}

    </AppContext.Consumer>)
} 