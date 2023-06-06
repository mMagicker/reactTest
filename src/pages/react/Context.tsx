import React, { useContext, createContext, useState } from "react";

interface ContextProps {
  data: any;
  onChange: (v: any) => void;
}

const TestContext = createContext<ContextProps | null>(null);
export default function ContextPage() {
  const [data, setData] = useState({ name: 123 });
  const onChange = (v: any) => {
    console.log(v);
  };
  return (
    <TestContext.Provider value={{ data: "", onChange }}>
      <ContextSon />
    </TestContext.Provider>
  );
}

const ContextSon = () => {
  const context = useContext(TestContext);
  const { data, onChange } = context!;
  const onBtnClick = () => {
    onChange("hello");
  };
  console.log(data);
  return (
    <div className="content">
      <p>{data}</p>
      <button onClick={onBtnClick}>click</button>
    </div>
  );
};
