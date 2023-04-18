import React, { useEffect, useState, memo, useRef } from 'react';

const SonCom: React.FC<{ name: string }> = (props) => {

	useEffect(() => {
		console.log('son effect')
	}, [])

	return <div>
		{ props.name }
	</div>
}

const MemoSon = memo(SonCom)


	const MyComponent = () => {

	// const [number, setNumber] = useState<number>(1)
	// const [name, setName] = useState<string>('name')
	// const firstLoad = useRef(true)
	//
	// const onClick = () => {
	// 	setNumber((number) => {
	// 		return number + 1
	// 	})
	// }

	// useEffect(() => {
	// 	let timer = setInterval(() => {
	// 		setNumber((number) => number + 1)
	// 	}, 2000)
	// 	return () => {
	// 		clearInterval(timer)
	// 	}
	// }, [])
	useEffect(() => {
		console.log('father effect')
	}, [])

	return (
		<div>
			{/*{ number }*/}
			{/*<button onClick={ onClick }>click</button>*/}
			{/*<SonCom name={ name } />*/ }
			{/*<MemoSon name={ name } />*/ }
		</div>
	);
};

export default MyComponent;
