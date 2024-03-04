const ports = [];

onconnect = (e) => {
	const port = e.ports[0];

	port.onmessage = (e) => {
		ports.forEach((targetPort) => {
			setTimeout(() => {
				const timestamp = new Date().getTime();
				targetPort.postMessage({
					name: e.data.name, msg: e.data.msg, timestamp,
				});
			}, Math.random() * 1000);
		});
	}

	ports.push(port);
};
