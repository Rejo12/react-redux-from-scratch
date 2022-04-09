import React from "react";

const MsgComp = (props) => {
  const { msgList } = props;
  const handleDelete = (item) => {
    props.deleteSelected(item.id);
  };
  return (
    <>
      {msgList.map((item) => {
        return (
          <div key={item.id}>
            <span>{item.msgText}</span>
            <button onClick={(e) => handleDelete(item)}>Delete</button>
          </div>
        );
      })}
    </>
  );
};

export default MsgComp;
