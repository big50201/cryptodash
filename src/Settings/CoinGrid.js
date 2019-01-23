import React from 'react';
import styled,{css} from 'styled-components';
import {AppContext} from '../App/AppProvider';

export const CoinGridStyled = styled.div`
    display:grid;
    grid-template-columns:repeat(5,1fr);
`

export default ()=>(
<AppContext.Consumer>
   {({coinList})=>
   <CoinGridStyled>
       {Object.keys(coinList).length && Object.keys(coinList).map(item=><div>{item}</div>)}
   </CoinGridStyled>} 
</AppContext.Consumer>)