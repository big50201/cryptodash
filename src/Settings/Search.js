import React from 'react';
import styled from 'styled-components';
import {backgroundColor2,fontSize2} from '../Shared/Styles';
import {AppContext} from '../App/AppProvider';
import _ from 'lodash';
import fuzzy from 'fuzzy';
const SearchGrid = styled.div`
    display:grid;
    grid-template-columns:200px 1fr;
`
const SearchInput = styled.input`
    ${backgroundColor2}
    ${fontSize2}
    color:#1163c9;
    border:1px solid;
    height:25px;
    place-self:center left;
`
const handlerFilter = _.debounce((input,coinList,setFilterCoins)=>{
   //get all coin symbol
    let coinSymbols = Object.keys(coinList);
   //get all coin names,map symbol to coinname
    let coinNames = coinSymbols.map(sym=>coinList[sym].CoinName);
    let allSearchCoins = coinSymbols.concat(coinNames);
    let fuzzySearchResult = fuzzy.filter(input,allSearchCoins,{}).map(result=>result.string);
    let filterCoins = _.pickBy(coinList,(result,sym)=>{
        let coinName = result.CoinName;
        return (_.includes(fuzzySearchResult,sym))||(_.includes(fuzzySearchResult,coinName));
    })
    setFilterCoins(filterCoins);
},500);

function filterCoins(e,setFilterCoins,coinList){
    let input = e.target.value;
    if(!input){
        setFilterCoins(null);
        return;
    }
    handlerFilter(input,coinList,setFilterCoins)
}
const Search = () => {
    return (
        <AppContext.Consumer>
            {
                ({setFilterCoins,coinList})=>(
                <SearchGrid>
                    <h2>Search all coins</h2>
                    <SearchInput onKeyUp={(e)=>filterCoins(e,setFilterCoins,coinList)}/>
                </SearchGrid>

                )
            }
          
        </AppContext.Consumer>
        
    );
};

export default Search;