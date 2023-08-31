import React, { useEffect, useRef } from 'react';

const ShareWorkerPage = () => {
	const workerRef = useRef(new SharedWorker('./static/js/worker.js', {}));
	const postMsg = () => {
		const port = workerRef.current.port;
		port.postMessage('hello');
	}

	useEffect(() => {
		const worker = workerRef.current;
		worker.port.onmessage = (e) => {
			console.log(e.data);
		}
	}, []);

	return <div>
		<h1>ShareWorker</h1>
		<button onClick={postMsg}>post msg</button>
	</div>
};

export default ShareWorkerPage;
