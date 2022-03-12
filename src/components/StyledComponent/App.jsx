import React from "react";
import { Button, ButtonLabel, StyledButton } from "./Button.style";
import { GlobalStyle } from "./GlobalStyles.style";

const StyledApp = () => {
  return (
    <React.Fragment>
      {/* GLobal Styles in styled-component */}
      <GlobalStyle></GlobalStyle>
      {/* styling element and passing prop */}
      <Button backgroundColor="red">
        <ButtonLabel>Click here</ButtonLabel>
      </Button>
      {/* Styling component and passing prop */}
      <StyledButton
        backgroundColor="violet"
        buttonLabel="New Label"
      ></StyledButton>
      <Button backgroundColor="green">Click here</Button>
    </React.Fragment>
  );
};

export default StyledApp;
