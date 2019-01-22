import React, { Component } from 'react';
import styled from 'styled-components';
import { AppContext } from '../AppProvider';

const ConfirmButtonStyled = styled.div`
    margin:20px;
    color:green;
    cursor:pointer;
`

const CenterDiv = styled.div`
    display:grid;
    justify-content:center;
`
export default ()=>{
    return (
    <AppContext.Consumer>
        {
            ({confirmFavorites})=>
            <CenterDiv>
                <ConfirmButtonStyled onClick={confirmFavorites}>
                    ConfirmFavorites
                </ConfirmButtonStyled>
            </CenterDiv>
            
        }
    </AppContext.Consumer>)
}