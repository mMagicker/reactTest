/*
* 测试useEffect能否监听到useRef数据的更新
* */

import React, { useEffect, useRef } from 'react';

const MyComponent = () => {

	const stateRef = useRef(0)

	const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		stateRef.current++
		console.log(stateRef.current)
	}

	useEffect(() => {
		console.log('ref 更新')
	}, [stateRef.current])

	return (
		<div>
			<button onClick={ (e) => onClick(e) }>click</button>
		</div>
	);
};

export default MyComponent;
