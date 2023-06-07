import React, { useRef, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Button } from "antd";

// 引入编辑器组件
import { CKEditor } from "@ckeditor/ckeditor5-react";

import { ClassicEditor } from "@ckeditor/ckeditor5-editor-classic";

// 引入 ckeditor5 的基础组件
import { Essentials } from "@ckeditor/ckeditor5-essentials";
import { Bold, Italic } from "@ckeditor/ckeditor5-basic-styles";
import { Paragraph } from "@ckeditor/ckeditor5-paragraph";

// 引入自定义组件
import Placeholder from "./placeholder/placeholder";
import ProductPreviewEditing from "./react/productpreviewediting";
import ExternalDataWidget from "./external-data-widget/externaldatawidget";
import TestPlugin from "./test-plugin/test-plugin";

const editorConfiguration = {
  plugins: [
    // ckeditor5 的基础组件
    Essentials,
    Bold,
    Italic,
    Paragraph,
    // 自定义组件
    Placeholder,
    // ExternalDataWidget,
    ProductPreviewEditing,
    TestPlugin,
  ],
  // 工具栏
  toolbar: ["bold", "italic", "external"],
  // 自定义配置
  products: {
    productRenderer: (id, domElement) => {
      ReactDOM.render(<Clock />, domElement);
    },
  },
};

export default function CKD() {
  const editorRef = useRef<ClassicEditor | null>(null);

  const addPlaceholder = () => {
    editorRef.current?.execute("placeholder", { value: "test" });
  };

  const addData = () => {
    editorRef.current?.execute("external");
  };

  const card2Editor = () => {
    editorRef.current?.execute("insertProduct");
  };

  const testClick = () => {
    editorRef.current?.execute("testCommand", 'test click');
  };

  return (
    <div className="app_content">
      <Button type="primary" onClick={addPlaceholder}>
        add Placeholder
      </Button>
      <Button style={{ margin: "20px" }} type="primary" onClick={addData}>
        add Data
      </Button>
      <Button onClick={card2Editor} type="primary">
        Add Card To Editor
      </Button>
      <Button onClick={testClick} type="primary">
        Test
      </Button>

      <CKEditor
        editor={ClassicEditor}
        config={editorConfiguration}
        data="<p>Hello from CKEditor 5!</p>"
        onReady={(editor) => {
          editorRef.current = editor;
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log({ event, editor, data });
        }}
      />
    </div>
  );
}

const Clock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    var timerID = setInterval(() => tick(), 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  });

  const tick = () => {
    setDate(new Date());
  };

  return (
    <div>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  );
};
