import React from "react";
import styled from "styled-components";

const MyStyles = styled.div`
  p {
    color: #b7ff00;
  }
  h4 {
    color: orange;
    text-shadow: 5px 5px 2px black;
  }
  span {
    color: #00fffa;
  }
`;
export default function HocComponent(InputComponent, props) {
  return class extends React.Component {
    state = { currTime: null };
    updateTime() {
      console.log(
        new Date().getHours(),
        new Date().getMinutes(),
        new Date().getSeconds()
      );
      this.setState({
        currTime: `${
          new Date().getHours() > 12
            ? new Date().getHours() - 12
            : new Date().getHours()
        }:${new Date().getMinutes()} ${
          new Date().getHours() > 12 ? "PM" : "AM"
        }`,
      });
    }
    render() {
      //   console.log(InputComponent, props);
      const customStyle = { color: "red !important" };
      return (
        <MyStyles>
          <InputComponent
            handleClick={(e) => this.updateTime()}
            currTime={this.state.currTime}
            // style={{ display: "none" }}
          />
        </MyStyles>
      );
    }
  };
}
