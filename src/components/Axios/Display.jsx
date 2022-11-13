import React, { useState } from "react";
import Api from "../../Api";

const Display = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const apiConnector = new Api();
  const handleRequest = (type) => {
    let result;
    if (type === "get") {
      result = apiConnector.getPosts();
    } else if (type === "post") {
      let reqBody = {
        title: "New post",
        body: "Post saved to check the response.",
      };
      result = apiConnector.savePosts(reqBody);
    } else if (type === "put") {
      let reqBody = {
        title: "Updated post",
        body: "Post updates.",
      };
      result = apiConnector.updatePost(reqBody);
    } else if (type === "delete") {
      result = apiConnector.deletePost();
    } else {
      console.error("Invalid type");
    }
    result
      .then((value) => {
        if (value.data) {
          console.log("value.data", value.data);
          setResponse(value.data);
        }
      })
      .catch((err) => {
        console.log(err.message);
        setError(err.message);
      });
  };
  console.table(response);
  return (
    <>
      <button onClick={(e) => handleRequest("get")}>GET</button>
      <button onClick={(e) => handleRequest("post")}>POST</button>
      <button onClick={(e) => handleRequest("put")}>PUT</button>
      <button onClick={(e) => handleRequest("delete")}>DELETE</button>
      <div>
        <span>Display your data here</span>
      </div>
    </>
  );
};

export default Display;
