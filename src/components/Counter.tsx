import React from 'react'

type CounterStateProps = {
  count: number
  clicked: number
}

type CounterProps = {}

export default class Counter extends React.Component<
  CounterProps,
  CounterStateProps
> {
  constructor(props: CounterProps) {
    super(props)
    this.state = { count: 0, clicked: 0 }
  }
  componentDidMount() {
    let timer: any
    let i = 0
    timer = setInterval(() => {
      i++
      this.updateCounter(i, timer)
    }, 1000)
  }

  updateCounter(i: number, timer: any) {
    if (i < 11) {
      this.setState((prevState) => ({
        count: prevState.count + 1,
      }))
    } else {
      clearInterval(timer)
      console.log(timer)
    }
  }

  // handleClick = (e) => {
  //   console.log("handleClick", e);
  //   this.setState((prevState) => ({
  //     clicked: prevState.clicked + 1,
  //   }));
  // };
  handleClick(a: number, b: number, c: number) {
    // const foo = [];
    // for (var i = 0; i < 3; i++) {
    //   (function () {
    //     var y = i;
    //     foo[y] = function () {
    //       return y;
    //     };
    //   })();
    // }
    // console.log(foo[0]());
    // console.log(foo[1]());
    // console.log(foo[2]());
    const arr = [7, 8, 9, 4, 5, 6]
    for (var prop of arr) {
      console.log(arr[prop])
    }
  }
  render() {
    const list: [number, number, number] = [1, 2, 4]
    return (
      <div>
        Count is:<b> {this.state.count}</b>
        <div>
          {/* <button onClick={(e) => this.handleClick(e)}>Click me</button> */}
          {/* <button onClick={this.handleClick.bind(this)}>Click me</button> */}
          <button onClick={(e) => this.handleClick(...list)}>Click me</button>
          Button clicked : <b>{this.state.clicked}</b>
        </div>
      </div>
    )
  }
}
