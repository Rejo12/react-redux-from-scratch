import React, { useState } from "react";
import InputComp from "./InputComp";
import MsgComp from "./MsgComp";

const Main = () => {
  const [msgList, setMsgList] = useState([]);
  const handleSaveMsg = (item) => {
    let tmpList = JSON.parse(JSON.stringify(msgList));
    console.log("item", tmpList);
    tmpList.push(item);
    setMsgList(tmpList);
  };
  const handleDeleteSelected = (id) => {
    let newList = [...msgList];
    const filteredList = newList.filter((ele) => {
      return ele.id !== id;
    });
    setMsgList(filteredList);
  };
  return (
    <>
      <InputComp saveMsg={handleSaveMsg} />
      <MsgComp msgList={msgList} deleteSelected={handleDeleteSelected} />
    </>
  );
};

export default Main;
