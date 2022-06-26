import React, { useRef } from "react";
import HocComponent from "./HocComponent";
import Skeleton from "./Skeleton";

const BaseComponent = (props) => {
  const myRef = useRef("basecomponent");
  console.log(props, myRef);
  return (
    <div {...props}>
      <h4>Case study about HOC</h4>
      <hr />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
        tenetur.
      </p>
      <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum
        quasi explicabo molestiae necessitatibus exercitationem dignissimos
        dolorem quaerat commodi est!
      </span>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
        voluptatem obcaecati rerum qui ratione maiores placeat aut voluptate
        quisquam rem nulla praesentium, iste consequatur dolor labore totam
        ipsum aliquam ad a eos laboriosam repellat debitis suscipit culpa!
        Adipisci unde doloremque ratione, sint quos vitae aut nesciunt libero
        nostrum possimus incidunt!
      </p>
      <Skeleton ref={myRef} time={props.currTime} />
      <div>
        <button onClick={props.handleClick}>Update Time</button>
        <span>Current time is {props.currTime}</span>
      </div>
    </div>
  );
};

export default HocComponent(BaseComponent);
