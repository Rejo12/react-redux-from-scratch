import React, { Fragment } from "react";
import axios from "axios";

export default class Child1 extends React.Component {
  state = {
    data: [],
  };
  componentDidMount() {
    const response = axios.get("https://jsonplaceholder.typicode.com/users");
    response.then((val) => {
      console.log("val", val);
      this.setState({
        data: val.data,
      });
    });
  }
  render() {
    const { data } = this.state;
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
