import React, { useEffect } from "react";
import "antd/dist/reset.css";
import "@/assets/fonts/iconfont.css";
import "@/assets/fonts/iconfont.js";
import Router from './router/v6_index'
import CustomRouter6 from './miniRouter_v6/App'

const App: React.FC = () => {
  return (
    <div className="app">
      <Router />
      {/*<CustomRouter6 />*/}
    </div>
  );
};

export default App;
