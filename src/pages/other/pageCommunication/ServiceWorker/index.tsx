import React, { useEffect, useRef } from 'react';

const ServiceWorkerPage = () => {
	const workerRef = useRef<SharedWorker>()

	const postMsg = () => {
		if(!workerRef.current) return;

		const port = workerRef.current.port;
		port.postMessage('hello');
	}

	useEffect(() => {
		const worker = new SharedWorker('/worker.js');
		console.log(worker)

		workerRef.current = worker;
	}, []);

	return <div>
		<h1>ServiceWorker</h1>
		<button onClick={postMsg}>post msg</button>
	</div>
};

export default ServiceWorkerPage;
