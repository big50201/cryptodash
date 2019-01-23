import React from 'react';
import styled,{css} from 'styled-components';
import {AppContext} from '../App/AppProvider';
import {SelectedTile} from '../Shared/Tile';
export const CoinGridStyled = styled.div`
    display:grid;
    grid-template-columns:repeat(5,1fr);
    grid-gap:14px;
`

export default ()=>(
<AppContext.Consumer>
   {({coinList})=>
   <CoinGridStyled>
       {Object.keys(coinList).length && Object.keys(coinList).map(item=><SelectedTile>{item}</SelectedTile>)}
   </CoinGridStyled>} 
</AppContext.Consumer>)