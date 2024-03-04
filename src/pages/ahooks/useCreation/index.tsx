import React, { useState, useMemo, useRef } from "react";
import { useCreation } from "ahooks";

class Foo {
  data: number;
  constructor(name: string) {
    console.log(name + "foo");
    this.data = Math.random();
  }
}

function UseCreation() {
  const foo1 = useCreation(() => new Foo("1"), []);
  const foo2 = useMemo(() => new Foo("2"), []);
  const foo3 = useRef(new Foo("3"));
  const [, setFlag] = useState({});
  const onClick = () => {
    setFlag({});
    console.log(foo3.current);
    console.log(foo1, foo2);
  };
  return (
    <div>
      <p>{foo1.data}</p>
      <p>{foo2.data}</p>

      <button onClick={onClick}>click</button>
    </div>
  );
}

export default UseCreation;
