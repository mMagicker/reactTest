import React, { useEffect } from "react";
import Router from "./router";
import "antd/dist/reset.css";
import "@/assets/fonts/iconfont.css";
import "@/assets/fonts/iconfont.js";

const App: React.FC = () => {
  return (
    <div className="app">
      <Router />
    </div>
  );
};

export default App;
