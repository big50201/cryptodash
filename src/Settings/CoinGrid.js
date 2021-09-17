import React from "react";
import styled from "styled-components";
import { AppContext } from "../App/AppProvider";
import CoinTile from "../Settings/CoinTile";
export const CoinGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  grid-gap: 14px;
  margin-top: 40px;
`;

function getLowerSectionCoins(coinList, filterCoins) {
  return (
    filterCoins &&
    (Object.keys(filterCoins) || Object.keys(coinList).slice(0, 100))
  );
}
function getCoinDisplay(coinList, topSection, favorites, filterCoins) {
  return topSection ? favorites : getLowerSectionCoins(coinList, filterCoins);
}

export default ({ topSection }) => (
  <AppContext.Consumer>
    {({ coinList, favorites, filterCoins }) => (
      <CoinGridStyled>
        {Object.keys(coinList, topSection, favorites, filterCoins).length &&
          getCoinDisplay(coinList, topSection, favorites, filterCoins).map(
            (item) => (
              <CoinTile key={item} topSection={topSection} coinKey={item} />
            )
          )}
      </CoinGridStyled>
    )}
  </AppContext.Consumer>
);
