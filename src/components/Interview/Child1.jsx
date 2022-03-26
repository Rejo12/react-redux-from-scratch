import React, { Fragment } from "react";
import axios from "axios";

export default class Child1 extends React.Component {
  state = {
    data: [],
  };

  static getDerivedStateFromProps(props, state) {
    if (props.interviewData.length !== state.data.length) {
      return { data: props.interviewData };
    }
    return null;
  }

  render() {
    const { data } = this.state;
    // console.log("data", data, this.props.interviewData);
    return (
      <>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <tr key={item.id} onClick={(e) => this.props.selectedRow(item)}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}
