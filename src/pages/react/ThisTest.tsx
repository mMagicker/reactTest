import React from "react";

interface dataType {
  id: number;
  name: string;
}

export default function ThisTest() {
  const data: dataType[] = [
    {id: 1, name: "node1"},
    {id: 3, name: "node3"},
  ];
  return (
    <div className="list">
      {data.map((item) => {
        return <Node key={item.id} data={item}/>;
      })}
    </div>
  );
}

const Node = (props: { data: dataType }) => {
  const onNodeClick = () => {
    console.log(props.data.name);
    console.log(this);
  };
  return <div onClick={onNodeClick}>{props.data.name}</div>;
};
