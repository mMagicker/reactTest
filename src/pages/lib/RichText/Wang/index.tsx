import "@wangeditor/editor/dist/css/style.css"; // 引入 css

import React, { useState, useEffect } from "react";
import { Button } from "antd";
import { Editor, Toolbar } from "@wangeditor/editor-for-react";
import {
  DomEditor,
  IDomEditor,
  IEditorConfig,
  IToolbarConfig,
  Boot,
  SlateElement,
} from "@wangeditor/editor";
import { h, VNode } from "snabbdom";

// ==================================== 注册变量节点数据结构 ====================================
// 支持的数据结构:https://www.wangeditor.com/v5/node-define.html#text-node
type VarElement = {
  type: "variable";
  ff: string;
  var_id: string;
};
const resume: SlateElement & VarElement = {
  type: "variable",
  children: [
    {
      text: "",
    },
  ],
  ff: "ff",
  var_id: "123",
};

// ==================================== 设置变量为行内 ====================================
function withVariable<T extends IDomEditor>(editor: T) {
  const { isInline, isVoid } = editor;
  const newEditor = editor;

  newEditor.isInline = (elem) => {
    const type = DomEditor.getNodeType(elem);
    if (type === "variable") return true; // 针对 type: variable ，设置为 inline
    return isInline(elem);
  };

  newEditor.isVoid = (elem) => {
    const type = DomEditor.getNodeType(elem);
    if (type === "variable") return true; // 针对 type: variable ，设置为 void
    return isVoid(elem);
  };

  return newEditor; // 返回 newEditor ，重要！！！
}

// 注册插件
Boot.registerPlugin(withVariable);

// ==================================== 节点渲染方法 ====================================
/**
 * 渲染“附件”元素到编辑器
 * @param elem 附件元素，即上文的 myResume
 * @param children 元素子节点，void 元素可忽略
 * @param editor 编辑器实例
 * @returns vnode 节点（通过 snabbdom.js 的 h 函数生成）
 */
function renderVariable(elem: SlateElement, children: VNode[] | null, editor: IDomEditor): VNode {
  // TS 语法
  const { ff = "default" } = elem as SlateElement & VarElement; // 附件元素的附加属性
  const attachVnode = h(
    "span",
    {
      props: { contentEditable: false }, // HTML 属性，驼峰式写法
      style: { display: "inline-block", border: "1px solid red", cursor: "pointer" }, // style ，驼峰式写法
      on: {
        click() {
          console.log("clicked");
        } /* 其他... */,
      },
    },
    [ff]
  );

  return attachVnode;
}

const renderElemConf = {
  type: "variable", // 新元素 type ，重要！！！
  renderElem: renderVariable,
};
// 注册节点渲染方法
Boot.registerRenderElem(renderElemConf);

// ==================================== 节点转html方法 ====================================
/**
 * 生成“附件”元素的 HTML
 * @param elem 附件元素，即上文的 myResume
 * @param childrenHtml 子节点的 HTML 代码，void 元素可忽略
 * @returns “附件”元素的 HTML 字符串
 */
function ToHtml(elem: SlateElement, childrenHtml: string): string {
  // 获取附件元素的数据
  const { ff, var_id } = elem as SlateElement & VarElement;

  // 生成 HTML 代码
  const html = `<span
        data-w-e-type="variable"
        data-w-e-is-void
        data-w-e-is-inline
        data-var-id="${var_id}"
    >${ff}</span>`;

  return html;
}

const elemToHtmlConf = {
  type: "variable", // 新元素的 type ，重要！！！
  elemToHtml: ToHtml,
};
// 注册转化方法
Boot.registerElemToHtml(elemToHtmlConf);

function Wang() {
  // editor 实例
  const [editor, setEditor] = useState<IDomEditor | null>(null); // TS 语法
  const [html, setHtml] = useState("<p>hello</p>");
  useEffect(() => {
    setTimeout(() => {
      setHtml("<p>hello world</p>");
    }, 1500);
  }, []);
  const toolbarConfig: Partial<IToolbarConfig> = {}; // TS 语法
  const editorConfig: Partial<IEditorConfig> = {
    placeholder: "请输入内容...",
  };
  const addVar = () => {
    editor!.insertNode(resume);
  };
  // 及时销毁 editor ，重要！
  useEffect(() => {
    return () => {
      if (editor == null) return;
      editor.destroy();
      setEditor(null);
    };
  }, [editor]);

  return (
    <div className="app_content">
      <Button onClick={addVar} style={{ marginBottom: "20px" }}>
        Add Var
      </Button>
      <div style={{ border: "1px solid #ccc", zIndex: 100 }}>
        <Toolbar
          editor={editor}
          defaultConfig={toolbarConfig}
          mode="default"
          style={{ borderBottom: "1px solid #ccc" }}
        />
        <Editor
          defaultConfig={editorConfig}
          value={html}
          onCreated={setEditor}
          onChange={(editor) => setHtml(editor.getHtml())}
          mode="default"
          style={{ height: "500px", overflowY: "hidden" }}
        />
      </div>
      <div style={{ marginTop: "15px" }}>{html}</div>
    </div>
  );
}

export default Wang;
