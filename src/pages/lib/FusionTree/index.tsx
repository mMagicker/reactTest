import React from "react";
import { Tree } from "@alifd/next";
import "@alifd/next/dist/next.css";

const { Node: TreeNode } = Tree;

export default function FusionTree() {
  const data = [
    {
      name: "1",
      id: "1",
      // sons: [
      //   {
      //     name: "1-s-1",
      //     id: "1-s-1",
      //     cameras: [
      //       {
      //         name: "1-s-1-c",
      //         id: "1-s-1-c",
      //       },
      //     ],
      //   },
      // ],
      // cameras: [
      //   {
      //     name: "1-c-1",
      //     id: "1-c-1",
      //   },
      // ],
    },
  ];

  const renderTreeNode = (data) => {
    return data?.map((item) => {
      const { children } = item || {};

      return (
        <TreeNode key={item.id} label={item.name}>
          {renderTreeNode(children)}
        </TreeNode>
      );
    });
  };
  const handleData = (data) => {
    return data.map((item) => {
      const { sons, cameras } = item || {};
      let _c = [...cameras.map((i) => ({ ...i, isC: true }))];
      if (sons) {
        const _sons = handleData(sons.map((i) => ({ ...i })));
        _c = [..._c, ..._sons];
      }
      return {
        id: item.id,
        name: item.name,
        children: _c,
        isC: item.isC || false,
      };
    });
  };

  const renderTreeNode2 = (data) => {
    return data.map((item) => {
      const { sons, cameras } = item;
      const hasSons = sons?.length > 0;
      const hasC = cameras?.length > 0;

      const res = [];
      // if (hasSons) {
      //   res.push(renderTreeNode2(sons));
      // }
      // if (hasC) {
      //   res.push(renderTreeNode2(cameras));
      // }
      console.log(hasSons && renderTreeNode2(sons));
      console.log(hasC && renderTreeNode2(cameras));
      return (
        <TreeNode key={item.id} label={item.name}>
          {/* {res} */}
          {hasSons ? renderTreeNode2(sons) : null}
          {hasC ? renderTreeNode2(cameras) : null}
        </TreeNode>
      );
    });
  };

  const render = () => {
    // 法1：格式化数据
    // const _data = handleData(data);
    // const res = renderTreeNode(_data);
    // 法2: 直接渲染
    const res = renderTreeNode2(data);
    console.log(res);
    return res;
  };

  const renderTest = () => {
    const data = [];
    const res = <>{data.length > 0 && data.map((i) => 1)}</>;
    console.log(res);
    return res;
  };

  return (
    <div>
      <Tree checkable>{render()}</Tree>
      <hr />
      <div className="test">{renderTest()}</div>
      <div className="test">
        {undefined}
      </div>
    </div>
  );
}
