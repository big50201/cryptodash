import React from 'react';
import styled,{css} from 'styled-components';
import {AppContext} from '../App/AppProvider';
import CoinTile from '../Settings/CoinTile';
export const CoinGridStyled = styled.div`
    display:grid;
    grid-template-columns:repeat(5,1fr);
    grid-gap:14px;
    margin-top:40px;
`
function getCoinDisplay(coinList,topSection){
    return Object.keys(coinList).slice(0,topSection ? 10:100);
}

export default ({topSection})=>(
<AppContext.Consumer>
   {({coinList})=>
   <CoinGridStyled>
       {
            Object.keys(coinList,topSection).length && 
            getCoinDisplay(coinList,topSection).map(item=>
            (<CoinTile topSection={topSection} coinKey={item}></CoinTile>))
        }
   </CoinGridStyled>} 
</AppContext.Consumer>)