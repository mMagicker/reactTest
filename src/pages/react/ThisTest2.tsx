import React, { Component } from "react";

interface dataType {
  id: number;
  name: string;
}

export default class ThisTest2 extends Component {
  data: dataType[] = [
    { id: 1, name: "node1" },
    { id: 3, name: "node3" },
  ];
  render() {
    return (
      <div className="list">
        {this.data.map((item) => {
          return <Node key={item.id} data={item} />;
        })}
      </div>
    );
  }
}

class Node extends Component<{ data: dataType }> {
  onNodeClick = () => {
    console.log(this.props.data.name);
    console.log(this);
  };
  render() {
    return <div onClick={this.onNodeClick}>{this.props.data.name}</div>;
  }
}
