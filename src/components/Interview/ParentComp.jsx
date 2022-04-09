import React, { Fragment } from "react";
import { connect } from "react-redux";
import Child1 from "./Child1";
import Child2 from "./Child2";
import fetchInterviewData from "../../Action.js/InterviewAction";

class ParentComp extends React.Component {
  state = {
    selectedData: null,
  };
  componentDidMount() {
    this.props.fetchInterviewData();
  }

  customPromise(time, type) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("promise log");
        resolve(type);
      }, time);
    });
  }
  saveData = async (item) => {
    const p1 = await this.customPromise(2000, "2000");
    console.log("1st log");
    const p2 = await this.customPromise(5000, "5000");
    console.log("2nd log");
    console.log("3rd log");

    this.setState({
      selectedData: item,
    });
  };
  render() {
    // console.log(this.props.interviewData);
    return (
      <>
        <Child1
          selectedRow={this.saveData}
          interviewData={this.props.interviewData}
        />
        <Child2 dataToPrint={this.state.selectedData} />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  interviewData: state.interviewReducer.fetchedData,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchInterviewData: () => {
      dispatch(fetchInterviewData());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ParentComp);
