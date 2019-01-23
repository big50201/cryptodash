import React from 'react';
import styled from 'styled-components';
import {AppContext} from '../App/AppProvider';
import CoinTile from '../Settings/CoinTile';
export const CoinGridStyled = styled.div`
    display:grid;
    grid-template-columns:repeat(5,1fr);
    grid-gap:14px;
    margin-top:40px;
`
function getCoinDisplay(coinList,topSection,favorites){
    return topSection? favorites :Object.keys(coinList).slice(0,100);
}

export default ({topSection})=>(
<AppContext.Consumer>
   {({coinList,favorites})=>
   <CoinGridStyled>
       {
            Object.keys(coinList,topSection,favorites).length && 
            getCoinDisplay(coinList,topSection,favorites).map(item=>
            (<CoinTile topSection={topSection} coinKey={item}></CoinTile>))
        }
   </CoinGridStyled>} 
</AppContext.Consumer>)