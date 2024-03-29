import React, { Component } from "react";
import _ from "lodash";
import moment from "moment";

const cc = require("cryptocompare");
cc.setApiKey(process.env.REACT_APP_API_KEY);

export const AppContext = React.createContext();
const MAX_FAVORITES = 10;
const TIME_UNITS = 10;
export class AppProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "dashboard",
      favorites: ["BTC", "ETH", "XMR", "DOGE"],
      timeInterval: "months",
      ...this.saveSettings(),
      setPage: this.setPage,
      confirmFavorites: this.confirmFavorites,
      addCoin: this.addCoin,
      removeCoin: this.removeCoin,
      isInFavorites: this.isInFavorites,
      setFilterCoins: this.setFilterCoins,
      setCurrentFavorite: this.setCurrentFavorite,
      changeChartSelect: this.changeChartSelect,
    };
  }

  addCoin = (key) => {
    let favorites = [...this.state.favorites];
    if (favorites.length < MAX_FAVORITES) {
      favorites.push(key);
      this.setState({ favorites });
    }
  };

  removeCoin = (key) => {
    let favorites = [...this.state.favorites];
    this.setState({ favorites: _.pull(favorites, key) });
  };

  isInFavorites = (key) => _.includes(this.state.favorites, key);

  fetchCoins = async () => {
    let coinList = (await cc.coinList()).Data;
    this.setState({ coinList });
  };
  confirmFavorites = () => {
    let currentFavorite = this.state.favorites[0];
    this.setState(
      {
        firstVisit: false,
        page: "dashboard",
        currentFavorite,
        price: null,
        historical: null,
      },
      () => {
        this.fetchPrices();
        this.fetchHistorical();
      }
    );
    localStorage.setItem(
      "cryptoDash",
      JSON.stringify({
        favorites: this.state.favorites,
        currentFavorite,
      })
    );
  };

  fetchPrices = async () => {
    if (this.state.firstVisit) return;
    let price = await this.price();
    this.setState({ price });
  };

  price = async () => {
    let returnData = [];
    for (let i = 0; i < this.state.favorites.length; i++) {
      try {
        let priceData = await cc.priceFull(this.state.favorites[i], "USD");
        returnData.push(priceData);
      } catch (e) {
        console.error("Fetch Price Error", e);
      }
    }
    return returnData;
  };

  fetchHistorical = async () => {
    if (this.state.firstVisit) return;
    let results = await this.historical();
    let historical = [
      {
        name: this.state.currentFavorite,
        data: results.map((ticker, index) => [
          moment()
            .subtract({ [this.state.timeInterval]: TIME_UNITS - index })
            .valueOf(),
          ticker.USD,
        ]),
      },
    ];
    this.setState({ historical });
  };

  historical = () => {
    let promises = [];
    for (let units = TIME_UNITS; units > 0; units--) {
      promises.push(
        cc.priceHistorical(
          this.state.currentFavorite,
          ["USD"],
          moment()
            .subtract({ [this.state.timeInterval]: units })
            .toDate()
        )
      );
    }
    return Promise.all(promises);
  };

  changeChartSelect = (value) => {
    this.setState(
      { timeInterval: value, historical: null },
      this.fetchHistorical
    );
  };

  setFilterCoins = (filterCoins) => this.setState({ filterCoins });

  setCurrentFavorite = (sym) => {
    this.setState({ currentFavorite: sym }, this.fetchHistorical);
    localStorage.setItem(
      "cryptoDash",
      JSON.stringify({
        ...JSON.parse(localStorage.getItem("cryptoDash")),
        currentFavorite: sym,
      })
    );
  };
  saveSettings() {
    let cryptodashData = JSON.parse(localStorage.getItem("cryptoDash"));
    if (!cryptodashData) {
      return { page: "settings", firstVisit: true };
    }
    let { favorites, currentFavorite } = cryptodashData;
    return { favorites, currentFavorite };
  }

  setPage = (page) => this.setState({ page });

  componentDidMount = () => {
    this.fetchCoins();
    this.fetchPrices();
    this.fetchHistorical();
  };

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
