import React from "react";
import { Editor } from "@tinymce/tinymce-react";

export default function Tinymce() {
  const handleEditorChange = (content: any, editor: any) => {
    console.log("Content was updated:", content);
  };
  // TODO
  // 1. 去掉没有key的警告
  // 2. 去掉底部logo
  return (
    <div className="app_content">
      <Editor
        initialValue="<p>This is the initial content of the editor</p>"
        init={{
          height: "100%",
          menubar: false,
          plugins:
            "lists advlist anchor autolink link  autosave charmap code codesample directionality help insertdatetime" +
            "nonbreaking save searchreplace visualblocks preview table visualchars",
          toolbar:
            "numlist anchor link charmap code codesample ltr rtl help insertdatetime" +
            "nonbreaking save searchreplace visualblocks preview table visualchars",
          // advlist_bullet_styles: "square",

          // plugins: [
          //   "advlist",
          // ],
          // toolbar:
          //   "undo redo | formatselect | " +
          //   "bold italic backcolor | alignleft aligncenter " +
          //   "alignright alignjustify | bullist numlist outdent indent | " +
          //   "removeformat | help",
        }}
        onEditorChange={handleEditorChange}
      />
    </div>
  );
}
