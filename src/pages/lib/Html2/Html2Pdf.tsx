// html2pdf
import React, { useRef } from "react";
import { Button } from "antd";
import html2pdf from "html2pdf.js";
import "./index.scss";

export default function Html2Pdf() {
  const contentRef = useRef(null);

  const onExport = () => {
    html2pdf(contentRef.current);
  };
  return (
    <div className="app_content">
      <div ref={contentRef}>
        <div className="export-content">
          <h2>page1</h2>
          <ul>
            <li>111</li>
            <li>中国制造</li>
            <li>测试</li>
            <li>111</li>
            <li>中国制造</li>
            <li>测试</li>
            <li>111</li>
            <li>中国制造</li>
            <li>测试</li>
            <li>111</li>
            <li>中国制造</li>
            <li>测试</li>
            <li>111</li>
            <li>中国制造</li>
            <li>测试</li>
            <li>111</li>
            <li>中国制造</li>
            <li>测试</li>
            <li>111</li>
            <li>中国制造</li>
            <li>测试</li>
            <li>111</li>
            <li>中国制造</li>
            <li>测试</li>
            <li>111</li>
            <li>中国制造</li>
            <li>测试</li>
            <li>111</li>
            <li>中国制造</li>
            <li>测试</li>
            <li>111</li>
            <li>中国制造</li>
            <li>测试</li>
            <li>111</li>
            <li>中国制造</li>
            <li>测试</li>
            <li>111</li>
            <li>中国制造</li>
            <li>测试</li>
            <li>111</li>
            <li>中国制造</li>
            <li>测试</li>
            <li>111</li>
            <li>中国制造</li>
            <li>测试</li>
            <li>111</li>
            <li>中国制造</li>
            <li>测试</li>
            <li>111</li>
            <li>中国制造</li>
            <li>测试</li>
            <li>111</li>
            <li>中国制造</li>
            <li>测试</li>
            <li>111</li>
            <li>中国制造</li>
            <li>测试</li>
            <li>111</li>
            <li>中国制造</li>
            <li>测试</li>
            <li>111</li>
            <li>中国制造</li>
            <li>测试</li>
            <li>111</li>
            <li>中国制造</li>
            <li>测试</li>
          </ul>
          <div className="page-break"></div>
          <h2>page2</h2>
          <table>
            <thead>
              <tr>
                <th>name</th>
                <th>age</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>张三</td>
                <td>18</td>
              </tr>
              <tr>
                <td>李四</td>
                <td>20</td>
              </tr>
            </tbody>
          </table>
          <div className="page-break"></div>
          <h2>page3</h2>
          <section>
            <h3>中国制造</h3>
            <p>
              中国制造中国制造中国制造中国制造中国制造中国制造中国制造中国制造中国制造中国制造中国制造中国制造中国制造中国制造中国制造中国制造中国制造中国制造中国制造中国制造中国制造中国制造中国制造中国制造中国制造中国制造中国制造中国制造中国制造中国制造中国制造中国制造中国制造中国制造中国制造中国制造中国制造中国制造中国制造中国制造中国制造中国制造中国制造中国制造中国制造中国制造中国制造中国制造中国制造中国制造中国制造中国制造中国制造
            </p>
          </section>
        </div>
      </div>
      <Button onClick={onExport} type="primary">
        export
      </Button>
    </div>
  );
}
