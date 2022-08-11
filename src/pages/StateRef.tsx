/**
 * 判断  useRef初始化绑定的useState数据,在state更新后useRef是否跟着改变
 */
import React, { useState, useRef } from "react";

const StateRef: React.FC = () => {

	const [state, setState] = useState({ a: { b: 1 } })
	const stateRef = useRef({})
	stateRef.current = state

	const onClick = () => {
		setState(Object.assign({}, { a: { b: 2, c: 1 } }))
		console.log(stateRef.current)
	}

	return <div onClick={ () => onClick() }>
		点击
	</div>
}

export default StateRef