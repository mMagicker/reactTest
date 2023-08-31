import React, { useEffect, useRef } from 'react';

const BroadcastChannelPage = () => {

	const channelRef = useRef<BroadcastChannel>();
	const sendMsg = () => {
		if(!channelRef.current) return console.log('channel is not init')
		channelRef.current.postMessage('hello world');
	}
	const initChannel = () => {
		channelRef.current = new BroadcastChannel('test_channel');
	}
	useEffect(() => {
		initChannel();
		if(!channelRef.current) return console.log('channel is not init')

		channelRef.current.onmessage = (e) => {
			console.log(e.data);
		}
	}, [])
	return <div>
		<h1>BroadcastChannel</h1>
		<button onClick={() => sendMsg()}>send Msg</button>
	</div>
};

export default BroadcastChannelPage;
