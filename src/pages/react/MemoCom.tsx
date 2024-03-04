/**
 * react 组件嵌套, 性能优化
 */
import React, { useEffect, useState, memo, useRef } from "react";

const SonCom = (props: { data: { number: number; name: string } }) => {
  const { data } = props;
  useEffect(() => {
    console.log("son effect");
  }, []);

  return <div>{data.number}</div>;
};

const MemoSon = memo(SonCom);

const MyComponent = () => {
  const [data, setData] = useState({
    number: 1,
    name: "name",
  });

  const onClick = () => {
    setData({
      ...data,
      number: data.number + 1,
    });
	};

  return (
    <div>
      {data.number}
      <button onClick={onClick}>click</button>
      <SonCom data={data} />
      <MemoSon data={data} />
    </div>
  );
};

export default MyComponent;
