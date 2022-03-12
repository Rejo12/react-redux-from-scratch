import React from "react";
import ButtonHOC from "./ButtonHoc";

class ButtonComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  handleClick = (e) => {
    console.log(e.target.values);
  };
  render() {
    return (
      <div>
        <button type="primary" onClick={this.props.handleClick}>
          Click Me
        </button>
        <br />
        Button has been clicked <strong>{this.props.dataToDisp}</strong> times
      </div>
    );
  }
}

export default ButtonHOC(ButtonComponent, 5);
