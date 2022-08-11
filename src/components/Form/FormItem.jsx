import React, { useLayoutEffect, useContext, useReducer } from 'react'
import FormContext from "./FormContext.jsx"

const FormItem = (props) => {
	const { name, rule, children } = props

	const FormInstance = useContext(FormContext)
	const { registerItem, getItemValue, setItemValue, getItemMessage } = FormInstance

	const [, forceUpdate] = useReducer((x) => x + 1, 0)

	useLayoutEffect(() => {
		registerItem({
			props,
			onStoreChange: forceUpdate,
		})
	}, [])

	const getItem = () => {
		return {
			value: getItemValue(name),
			onChange: (e) => {
				const _v = e.target.value
				setItemValue({ [name]: _v })
			},
		}
	}
	let internalChildren = React.cloneElement(children, getItem())

	console.log(getItemValue(name))
	let errorMessage = getItemMessage([name])

	return (
		<div className="form-item">
			<div className="form-item-content">
				{ internalChildren }
			</div>
			<div className="form-item-error-msg">
				{ errorMessage }
			</div>
		</div>
	)
}

export default FormItem
