import React, { Fragment } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

export default class ParentComp extends React.Component {
  state = {
    selectedData: null,
  };
  saveData = (item) => {
    console.log("item", item);
    this.setState({
      selectedData: item,
    });
  };
  render() {
    return (
      <>
        <Child1 selectedRow={this.saveData} />
        <Child2 dataToPrint={this.state.selectedData} />
      </>
    );
  }
}
