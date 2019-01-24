import React, { Component } from 'react';
import _ from 'lodash';

const cc = require('cryptocompare');
export const AppContext = React.createContext();
const MAX_FAVORITES = 10;

export class AppProvider extends Component {
    constructor(props){
        super(props);
        this.state = {
            page:'dashboard',
            favorites:['BTC','ETH','XMR','DOGE'],
            ...this.saveSettings(),
            setPage:this.setPage,
            confirmFavorites:this.confirmFavorites,
            addCoin:this.addCoin,
            removeCoin:this.removeCoin,
            isInFavorites:this.isInFavorites,
            setFilterCoins:this.setFilterCoins,
            setCurrentFavorite:this.setCurrentFavorite
        }
    }

    addCoin= key=>{
        let favorites = [...this.state.favorites];
        if(favorites.length<MAX_FAVORITES){
            favorites.push(key);
            this.setState({favorites});
        }
    }

    removeCoin = key=>{
        let favorites = [...this.state.favorites];
        this.setState({favorites:_.pull(favorites,key)})
    }

    isInFavorites = key=>_.includes(this.state.favorites, key);

   
    fetchCoins = async ()=>{
        let coinList = (await cc.coinList()).Data;
        this.setState({coinList})
    }
    confirmFavorites = ()=>{
        let currentFavorite = this.state.favorites[0];
        this.setState({
            firstVisit:false,
            page:'dashboard',
            currentFavorite
        },()=>{
            this.fetchPrices();
        });
        localStorage.setItem('cryptoDash',JSON.stringify({
            favorites:this.state.favorites,
            currentFavorite
        }))
    }

    fetchPrices = async ()=>{
        if(this.state.firstVisit)return;
        let price = await this.price();
        this.setState({price});
    }

    price = async()=>{
        let returnData = [];
        for(let i=0;i<this.state.favorites.length;i++){
            try{
                let priceData = await cc.priceFull(this.state.favorites[i],'USD');
                returnData.push(priceData);
            }catch(e){
                console.error('Fetch Price Error',e);
            }
        }
        return returnData;

    }
    setFilterCoins = (filterCoins)=>this.setState({filterCoins})

    setCurrentFavorite = (sym)=>{
        this.setState({currentFavorite:sym});
        localStorage.setItem('cryptoDash',JSON.stringify({
            ...JSON.parse(localStorage.getItem('cryptoDash')),
            currentFavorite:sym
        }))
    }
    saveSettings(){
        let cryptodashData = JSON.parse(localStorage.getItem('cryptoDash'));
        if(!cryptodashData){
            return {page:'settings',firstVisit:true};
        }
        let {favorites,currentFavorite} = cryptodashData;
        return {favorites,currentFavorite};
    }

    setPage = page=>this.setState({page});

    componentDidMount = ()=>{
        this.fetchCoins();
        this.fetchPrices();
    }

    render() {
        return (
        <AppContext.Provider value={this.state}>
            {this.props.children}
        </AppContext.Provider>);
    }
}

