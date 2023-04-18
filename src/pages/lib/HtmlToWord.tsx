import React from "react";
import { saveAs } from "file-saver";
import { asBlob } from "html-docx-js-typescript";

export default function HtmlToWord() {
  const htmlStr = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    <h1>123</h1>
    <div style="text-align:'center'">
      <img src="data:image/jpeg;base64,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" />
    </div>
  </body>
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