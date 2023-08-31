import React, { useState, useCallback, memo } from "react";

const ContextPage = () => {
	const [type, setType] = useState<string>("");
	const [value, setValue] = useState<string>("");

	const changeType = useCallback((v: string) => {
		setType(v);
	}, []);

	return (<div>
			<Child1 type={type} changeType={changeType} />
			<Child2 value={value} />
		</div>);
};

const Child1 = memo(({
	type,
	changeType,
}) => {
	console.log('child1');

	return (<div>
			<p>{type}</p>
			<button onClick={() => changeType(type + "1")}>click</button>
		</div>);
});

const Child2 = memo(({ value }) => {
	console.log('child2');

	return <p>{value}</p>;
});

export default ContextPage;
