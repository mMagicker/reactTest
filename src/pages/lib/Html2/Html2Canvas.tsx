import React from 'react'
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Html2Canvas = (props) => {

  const templateStr = `
    <div>this is a word</div> 
  `

  const onExport = () => {
    // 将templateStr导出为 pdf
    // const element = document.createElement('div')
    // element.innerHTML = templateStr
    const element = document.getElementsByClassName('test')[0]
    html2canvas(element).then(canvas => {
      const contentWidth = canvas.width
      const contentHeight = canvas.height
      const pageHeight = contentWidth / 592.28 * 841.89
      let leftHeight = contentHeight
      let position = 0
      const imgWidth = 595.28
      const imgHeight = 592.28 / contentWidth * contentHeight
      const pageData = canvas.toDataURL('image/jpeg', 1.0)
      const PDF = new jsPDF('', 'pt', 'a4')
      if(leftHeight < pageHeight) {
        PDF.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight)
      } else {
        while(leftHeight > 0) {
          PDF.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)
          leftHeight -= pageHeight
          position -= 841.89
          if(leftHeight > 0) {
            PDF.addPage()
          }
        }
      }
      PDF.save('content.pdf')

    })
  }
  return <div>
    <div className="test">123123</div>
    <button onClick={onExport}>export pdf</button>
  </div>
}

export default Html2Canvas