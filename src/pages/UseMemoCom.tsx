import React, { useState, useMemo } from 'react';

const MyComponent = () => {

	const [number, setNumber] = useState(1)
	const [value, setValue] = useState(1)
	const memoFunction = useMemo(() => console.log(123), [value])
	return (
		<div>
			<button onClick={ () => setNumber(number + 1) }>change number</button>
			<button onClick={ () => setValue(value + 1) }>change value</button>
			<SonMemoCom number={ number } />
		</div>
	);
};

const SonMemoCom: React.FC<{ number: number }> = ({ number }) => {

	useMemo(() => console.log('son memo'), [])

	return <div>
		{ number }
	</div>
}

export default MyComponent;
