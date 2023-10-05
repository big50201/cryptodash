import React from "react";
import styled from "styled-components";
import { AppContext } from "../App/AppProvider";
import { fontSize1, yellowBoxShadow, color3 } from "../Shared/Styles";
const ConfirmButtonStyled = styled.div`
  margin: 20px;
  color: ${color3};
  ${fontSize1} cursor:pointer;
  &:hover {
    ${yellowBoxShadow};
  }
`;

const CenterDiv = styled.div`
  display: grid;
  justify-content: center;
`;
export default () => {
  return (
    <AppContext.Consumer>
      {({ confirmFavorites }) => (
        <CenterDiv>
          <ConfirmButtonStyled onClick={confirmFavorites}>
            ConfirmFavorites
          </ConfirmButtonStyled>
        </CenterDiv>
      )}
    </AppContext.Consumer>
  );
};
