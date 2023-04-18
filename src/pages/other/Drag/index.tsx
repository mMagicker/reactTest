import React from "react";
import "./Drag.scss";

export default function Drag() {
  const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    console.log("onDragStart");
  };
  const onDrag = (e: React.DragEvent<HTMLDivElement>) => {
    console.log("onDrag");
  };
  const onDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    console.log("onDragEnd");
  };
  const onDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    console.log("onDragEnter");
  };
  const onDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    console.log("onDragLeave");
  };
  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    console.log("onDrop");
  };
  return (
    <div>
      <h1>Drag</h1>
      <div className="drop-zone">
        <div
          id="drag"
          draggable={true}
          onDrag={onDrag}
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}
        >
          target
        </div>
      </div>
      <div
        className="drop-zone"
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      ></div>
    </div>
  );
}
