import React from 'react'
import useForm from "./useForm.jsx"
import FormContext from "./FormContext.jsx"

const Form = (props) => {

	const { form, children, onFinish, onFinishFailed } = props

	const formInstance = form
	const { setCallbacks } = formInstance

	setCallbacks({ onFinish, onFinishFailed })

	return (
		<form className="form" onSubmit={ (e) => {
			e.preventDefault()
			formInstance.submit()
		} }
		>
			<FormContext.Provider value={ formInstance }>
				{ children }
			</FormContext.Provider>
		</form>
	)
}

Form.useForm = useForm

export default Form
