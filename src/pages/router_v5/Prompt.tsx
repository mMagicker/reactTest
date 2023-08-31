import React from 'react';
import { Prompt } from "react-router-dom";
import { Menu } from "antd";

const PromptPage = () => {
  return (
    <div>
      <Prompt message="您即将退出页面" />
      <Menu
        mode="inline"
        items={[
          {
            key: 'Prompt',
            title: 'Prompt',
          },
          {
            key: 'Crypto',
            title: 'Crypto'
          },
        ]}
      >

      </Menu>
    </div>
  );
};

export default PromptPage;
