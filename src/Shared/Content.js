import React from 'react';
import {AppContext} from '../App/AppProvider';

export default function(props){
    return (
    <AppContext.Consumer>
        {({coinList,price,firstVisit})=>{
            if(!coinList){
                return (<div>Coin Loadings</div>)
            }

            if(!firstVisit&&!price){
                return (<div>Price Loadings</div>)
            }
            return <div>{props.children}</div>
        }}
    </AppContext.Consumer>)
}