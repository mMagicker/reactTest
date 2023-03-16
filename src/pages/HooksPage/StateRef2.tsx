/*
* 情况1:ref为基本类型, state绑定ref值,看效果
* 情况2: ref为引用类型, state绑定ref值,看效果
*
* */

import React, { useState, useRef, useEffect } from 'react';

type test = {
	name: string,
	age: number
}
const MyComponent = () => {


	const stateRef = useRef<test>({
		name: "小明",
		age: 23
	})
	const [state, setState] = useState(stateRef.current)

	const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		stateRef.current.age++
		console.log(stateRef.current)
	}

	useEffect(() => {
		console.log(state)
	}, [JSON.stringify(state)])

	return (
		<div>
			<button onClick={ (e) => onClick(e) }>click</button>
			<p>{ state.age }</p>
		</div>
	);
};

export default MyComponent;
