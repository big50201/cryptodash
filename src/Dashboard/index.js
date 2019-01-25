import React from 'react';
import Page from '../Shared/Page';
import PriceGrid from '../Dashboard/PriceGrid';
import CoinSpotLight from '../Dashboard/CoinSpotlight';
import styled from 'styled-components';

const ChartGrid = styled.div`
    display:grid;
    margin-top:20px;
    grid-gap:15px;
    grid-template-columns:1fr 3fr;
`
export default function(){
    return (
    <Page name="dashboard">
        <PriceGrid/>
        <ChartGrid>
            <CoinSpotLight/>            
            <div>chart start</div>

        </ChartGrid>
    </Page>)
};