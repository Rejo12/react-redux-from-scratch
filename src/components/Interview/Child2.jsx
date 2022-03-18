import React from "react";

export default class Child2 extends React.Component {
  render() {
    return (
      this.props.dataToPrint !== null && (
        <span>
          Selected id is: <strong>{this.props.dataToPrint.id} </strong>
          and selected name is: <strong>{this.props.dataToPrint.name}</strong>
        </span>
      )
    );
  }
}
