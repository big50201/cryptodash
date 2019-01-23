import React from 'react';
import styled from 'styled-components';

export const CoinHeaderGirdStyled = styled.div`
    display:grid;
    grid-template-columns:1fr 1fr;
`

export const CoinSymbol = styled.div`
    justify-self:right;
`

export default function ({name,symbol}){
    return (
    <CoinHeaderGirdStyled>
        <div>{name}</div>
        <CoinSymbol>{symbol}</CoinSymbol>
    </CoinHeaderGirdStyled>)
}