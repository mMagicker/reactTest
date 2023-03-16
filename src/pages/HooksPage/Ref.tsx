import React, { useRef } from "react"

export default function Ref() {
  const nodes = [
    {
      key: "1",
      name: "1",
    },
    {
      key: "2",
      name: "2",
    },
    {
      key: "3",
      name: "3",
    },
  ]
  const nodeRef = useRef<any[]>([])

  const print = () => {
    console.log(nodeRef.current)
  }

  return (
    <div style={{ margin: "100px", border: "1px solid red" }}>
      <button onClick={() => print()}>click</button>
      {nodes.map((item, index) => {
        return (
          <div
            key={item.key}
            ref={(node) => {
              if (node) {
                nodeRef.current[index] = node
              }
            }}
          >
            {item.name}
          </div>
        )
      })}
    </div>
  )
}
