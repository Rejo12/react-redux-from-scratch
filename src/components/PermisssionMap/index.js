import React, { useState, useTransition } from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  width: 35px;
  height: 35px;
  margin: 5px;
`;

const Permission = () => {
  const [permission, setPermission] = useState([
    {
      type: "read",
      dataList: [
        {
          value1: false,
        },
        {
          value2: false,
        },
      ],
    },
    {
      type: "write",
      dataList: [
        {
          value1: true,
        },
        {
          value2: true,
        },
      ],
    },
    {
      type: "delete",
      dataList: [
        {
          value1: false,
        },
        {
          value2: false,
        },
      ],
    },
  ]);

  const [dummyState, setDummyState] = useState(null);
  const [isPending, startTransition] = useTransition();

  const handleChange = (type, innerItem, e) => {
    //console.log(type, innerItem, e.target.checked);
    /* base condition delete is true everything is true
      delete is false everything is false
      everything is true --> delete is true
      everything is false --> delete is false  
    
    */
    const tmpState = JSON.parse(JSON.stringify(permission));
    for (let obj in tmpState) {
      //console.log(tmpState[obj].type, type);
      if (tmpState[obj].type === type) {
        for (let prop in tmpState[obj].dataList) {
          let key = Object.keys(innerItem);
          let key1 = Object.keys(tmpState[obj].dataList[prop]);
          if (key1[0] === key[0]) {
            //console.log(key1[0]);
            tmpState[obj].dataList[prop][key[0]] = e.target.checked;
          }
        }
        break;
      }
    }
    if (type === "delete") {
      for (let obj in tmpState) {
        //console.log(tmpState[obj].type, type);
        for (let prop in tmpState[obj].dataList) {
          let key = Object.keys(innerItem);
          let key1 = Object.keys(tmpState[obj].dataList[prop]);
          if (key1[0] === key[0] && e.target.checked) {
            //console.log(key1[0]);
            tmpState[obj].dataList[prop][key[0]] = e.target.checked;
          }
        }
      }
    } else {
      if (!e.target.checked) {
        for (let obj in tmpState) {
          //console.log(tmpState[obj].type, type);
          for (let obj in tmpState) {
            //console.log(tmpState[obj].type, type);
            if (tmpState[obj].type === "delete") {
              for (let prop in tmpState[obj].dataList) {
                let key = Object.keys(innerItem);
                let key1 = Object.keys(tmpState[obj].dataList[prop]);
                if (key1[0] === key[0]) {
                  //console.log(key1[0]);
                  tmpState[obj].dataList[prop][key[0]] = e.target.checked;
                }
              }
              break;
            }
          }
        }
      }
    }
    //console.log({ tmpState });

    setPermission(tmpState);

    startTransition(() => {
      setDummyState("new state");
    });

    // setTimeout(() => {
    //   setDummyState(1);
    //   setDummyState(2);
    // }, 5000);
  };

  console.log("--------render-----------", isPending, dummyState);
  return (
    <div className="permission-container">
      {permission.length > 0
        ? permission.map((item) => {
            return item.dataList.map((innerItem, index) => {
              let checkboxValue = Object.keys(innerItem);
              //console.log("here", index);
              if (item.type === "read") {
                return (
                  <>
                    <StyledInput
                      label={"text"}
                      type="checkbox"
                      className="permission-checkbox"
                      id={index % 2 === 0 ? "odd" : "even"}
                      key={`${item.type}-${index}`}
                      checked={innerItem[checkboxValue[0]]}
                      onChange={(e) => handleChange(item.type, innerItem, e)}
                    />
                  </>
                );
              } else if (item.type === "write") {
                return (
                  <StyledInput
                    label={"text"}
                    type="checkbox"
                    className="permission-checkbox"
                    id={index % 2 === 0 ? "odd" : "even"}
                    key={`${item.type}-${index}`}
                    checked={innerItem[checkboxValue[0]]}
                    onChange={(e) => handleChange(item.type, innerItem, e)}
                  />
                );
              } else {
                return (
                  <StyledInput
                    label={"text"}
                    type="checkbox"
                    className="permission-checkbox"
                    id={index % 2 === 0 ? "odd" : "even"}
                    key={`${item.type}-${index}`}
                    checked={innerItem[checkboxValue[0]]}
                    onChange={(e) => handleChange(item.type, innerItem, e)}
                  />
                );
              }
            });
          })
        : "you don't have permission"}
      {/* <StyledInput type="checkbox" />
      <StyledInput type="checkbox" />
      <StyledInput type="checkbox" /> */}
    </div>
  );
};

export default Permission;
