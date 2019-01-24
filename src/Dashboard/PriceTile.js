import React from 'react';
import styled,{css} from 'styled-components';
import {SelectableTile} from '../Shared/Tile';
import { fontSize3 ,fontSizeBig } from '../Shared/Styles';
import { CoinHeaderGirdStyled } from '../Settings/CoinHeaderGrid';

const numberfomat = number=>{
    return +(number+'').slice(0,7);
}

const TickerPrice = styled.div`
    ${fontSizeBig}
`
const PriceTileStyled = styled(SelectableTile)`
    ${props=>props.compact&&css`
        ${fontSize3}
        display:grid;
        grid-gap:5px;
        grid-template-columns:repeat(3,1fr);
        justify-items:right;
    `}
`
const ChangPct = styled.div`
    color:green;
    ${props=>props.red&&css`
        color:red;
    `}
`
const JustifyRight = styled.div`
    justify-self:right;
`

const JustifyLeft = styled.div`
    justify-self:left;
`

function ChangePercent({data}){
    return (
    <JustifyRight>
        <ChangPct red={data.CHANGE24HOUR<0}>{numberfomat(data.CHANGE24HOUR)}</ChangPct>
    </JustifyRight>)
}

function PriceTile({sym,data}){
    return (
    <PriceTileStyled>
        <CoinHeaderGirdStyled>
            <JustifyLeft>{sym}</JustifyLeft>
        <ChangePercent data={data}/>
        </CoinHeaderGirdStyled>
        <TickerPrice>
            ${numberfomat(data.PRICE)}
        </TickerPrice>
    </PriceTileStyled>)
}

function PriceTileCompact({sym,data}){
    return (
    <PriceTileStyled compact>
        <CoinHeaderGirdStyled>
            <div>{sym}</div>
        <ChangePercent data={data}/>
        </CoinHeaderGirdStyled>
        <TickerPrice>
            ${numberfomat(data.PRICE)}
        </TickerPrice>
    </PriceTileStyled>)
}

export default function({price,index}){
    let sym = Object.keys(price)[0];
    let data = price[sym]['USD'];
    let TileClass = index<5 ? PriceTile : PriceTileCompact
    return (
    <TileClass sym={sym} data={data}>
    </TileClass>)
}