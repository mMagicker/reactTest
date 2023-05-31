import React from "react";
import { saveAs } from "file-saver";
import { asBlob } from "html-docx-js-typescript";

export default function HtmlToWord() {
  const cssStyle = `
  <style>
    html{
      width: 1000px;
    }
  </style>
  `
  const boxHtml = `
    <div>
      <img src="http://img.99wenzhangwang.com/d/file/202112/emkh11brtu5.jpg" /> 
    </div>
  `
  const htmlStr = `
  <!doctype html>
  <html>
      <head>${cssStyle}</head>
      <body>${boxHtml}</body>
  </html> 
  `;
  const onExport = () => {
    asBlob(htmlStr, { orientation: "landscape" }).then((data) => {
      saveAs(data, `${Date.now()}.docx`);
    });
  };
  return (
    <div>
      <button onClick={onExport}>click</button>
      <img src="" alt="" />
    </div>
  );
}
