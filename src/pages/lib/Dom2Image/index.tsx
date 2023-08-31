import React, { useRef, useState } from 'react';
import { Button } from "antd";
import * as domtoimage from 'dom-to-image';
import './index.scss'

/**
 *  dom-to-image
 *  node必须是dom节点
 * */

const Dom2Image = () => {

	const domRef = useRef(null)

	const [imgUrl, setImgUrl] = useState<string>()

	const onPrint = () => {
		const node = domRef.current
		domtoimage.toPng(node)
			.then(function(dataUrl: string) {
				console.log(dataUrl)
				setImgUrl(dataUrl)
				// var img = new Image();
				// img.src = dataUrl;
				// document.body.appendChild(img);
			})
			.catch(function(error: string) {
				console.error('oops, something went wrong!', error);
			});
	}

	return (
		<div className="dom2image">
			<div className="print-container">
				<main ref={ domRef }>
					<div className="print-title">测试文字</div>
					<div className="print-title">测试文字</div>
					<div className="print-title">测试文字</div>
					<div className="print-title">测试文字</div>
					<div className="print-title">测试文字</div>
					<div className="print-title">测试文字</div>
					<div className="print-title">测试文字</div>
					<div className="print-title">测试文字</div>
					<div className="print-title">测试文字</div>
				</main>
			</div>
			<Button onClick={ onPrint }>export</Button>
			<div className="image-wrap">
				<img src={ imgUrl } alt="" />
			</div>
		</div>
	);
};

export default Dom2Image;
