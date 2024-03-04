import React, { useState, useRef } from 'react';
import { BaseMap } from './components';
import { Button, Modal } from 'antd';
import './index.scss'

const LeafletPage = () => {
	const [modalOpen, setModalOpen] = useState(false)
	const contentRef = useRef<HTMLDivElement>(null)
	const onClose = () => {
		if(!contentRef.current) return

		contentRef.current.scrollTop = 0
		setModalOpen(false)
	}
	return <div className="leaflet-page">
		<header>
			<Button onClick={() => setModalOpen(true)}>show modal map</Button>
		</header>
		<Modal
			// destroyOnClose={true}
			open={modalOpen}
			onCancel={onClose}
			footer={null}
		>
			<div className="content" ref={contentRef}>
				<h1>123123</h1>
				<h1>123123</h1>
				<h1>123123</h1>
				<h1>123123</h1>
				<h1>123123</h1>
				<h1>123123</h1>
				<h1>123123</h1>
				<h1>123123</h1>
				<h1>123123</h1>
				<h1>123123</h1>
				<h1>123123</h1>
				<h1>123123</h1>
				<h1>123123</h1>
				<h1>123123</h1>
				<h1>123123</h1>
				<BaseMap />
			</div>
		</Modal>
	</div>
};

export default LeafletPage;
