import React, { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import type { Editor as TinymceEditor } from "tinymce";
import { Button } from "antd";
import "./index.scss";

export default function Tinymce() {
  const editorRef = useRef<TinymceEditor>();
  const [editorVal, setEditorVal] = useState<string>(""); // 编辑器内容
  const handleEditorChange = (content: any, editor: any) => {
    console.log("Content was updated:", content);
  };
  const onEditorChange = (content: string, editor: TinymceEditor) => {};

  const addVar = () => {
    const editor = editorRef.current;
    if (!editor) return;

    const newVar = `<span class="nonedit" data-var="var1">var1</span>`;
    editorRef.current?.insertContent(newVar);
  };

  return (
    <div className="app_content">
      <div className="actions" style={{ marginBottom: "20px" }}>
        <Button onClick={addVar} type="primary">
          add var
        </Button>
      </div>
      <Editor
        initialValue="<p>This is the initial content of the editor</p>"
        value={editorVal}
        tinymceScriptSrc="./static/tinymce/tinymce.min.js" // https://www.tiny.cloud/get-tiny/#self-hosted
        onEditorChange={handleEditorChange} // 内容改变回调
        onInit={(evt, editor) => (editorRef.current = editor)}
        init={{
          height: "100%",
          menubar: false, // 关闭菜单栏
          draggable_modal: false, // 文字是否可以拖拽
          // 语言, 下载地址 https://www.tiny.cloud/get-tiny/language-packages/
          language: "zh-Hans",
          language_url: "./static/tinymce/langs/zh-Hans.js",

          noneditable_class: "nonedit", // 不可编辑的class
          content_css: "./static/tinymce/css/content.css", // 内容样式文件
          content_style: "", // 内容样式

          // 文件上传
          file_picker_types: "image", // 上传文件类型
          file_picker_callback: function (cb: any, value: any, meta: any) {
            var input = document.createElement("input");
            input.setAttribute("type", "file");
            input.setAttribute("accept", "image/*");
          }, // 上传文件回调

          quickbars_inset_toolbar: false, // 关闭快速工具栏
          powerpaste_word_import: "clean", // 清除word格式
          powerpaste_html_import: "clean", // 清除html格式

          plugins: [
            "lists",
            "advlist",
            "anchor",
            "autolink",
            "link",
            "autosave",
            "charmap",
            "code",
            "codesample",
            "directionality",
            "help",
            "insertdatetime",
            "nonbreaking",
            "save",
            "searchreplace",
            "visualblocks",
            "preview",
            "table",
            "visualchars",
          ],
          toolbar:
            "myButton numlist anchor link charmap code codesample ltr rtl help insertdatetime" +
            "nonbreaking save searchreplace visualblocks preview table visualchars",
          setup: (editor) => {
            editor.ui.registry.addButton("myButton", {
              text: "My Button",
              onAction: () => {
                editor.insertContent("Hello World!");
              },
            });
          },
        }}
      />
    </div>
  );
}
