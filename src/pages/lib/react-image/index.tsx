import React from "react";
import { Img } from "react-image";

const ReactImage = () => {
  return (
    <div>
      <h2>react-image</h2>
      <Img
        src="https://file-examples.com/storage/feb57324aa650f65fa00875/2017/10/file_example_PNG_3MB.png"
        loader={<p>图片加载中</p>}
        unloader={<p>图片加载失败</p>}
      />
    </div>
  );
};

export default ReactImage;
