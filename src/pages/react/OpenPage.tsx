import React from "react";
import { Button } from "antd";

export default function OpenPage() {
  const openPage = () => {
    window.open("https://www.baidu.com");
  };
  return (
    <div>
      <h2>open a new Page</h2>
      <Button onClick={openPage}>open new page</Button>
    </div>
  );
}
