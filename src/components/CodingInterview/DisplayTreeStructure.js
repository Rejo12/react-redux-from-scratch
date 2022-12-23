import React, { useState } from "react";

const files = {
  children: [
    {
      name: "node_modules",
      children: [
        {
          name: "joi",
          children: [
            {
              name: "local_package.json",
            },
            {
              name: "style.css",
            },
          ],
        },
      ],
    },
    {
      name: "package.json",
    },
    {
      name: "index.html",
    },
  ],
};

const Entry = ({ entry, depth }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div>
      {entry.children?.length ? (
        <button
          className="entryButton"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "- " : "+ "}
          {entry.name}
        </button>
      ) : (
        <div>{entry.name}</div>
      )}
      <br />
      <br />
      {isExpanded && (
        <div style={{ marginLeft: `${depth * 15}px` }}>
          {entry.children?.map((item) => (
            <Entry
              key={`${depth - item.name}`}
              entry={item}
              depth={depth + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const DisplayTree = () => {
  return (
    <div>
      {files.children.map((item) => (
        <Entry entry={item} depth={1} key={item.name} />
      ))}
    </div>
  );
};

export default DisplayTree;
