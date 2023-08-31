import React from 'react'
import { Form, FormItem } from '@/components'

function FormPage() {
	const [form] = Form.useForm()
	const onFinish = (data) => {
		console.log(data)
	}
	const onFinishFailed = (data) => {
		console.log(data)
	}
	return (
		<div>
			<Form form={ form } onFinish={ onFinish } onFinishFailed={ onFinishFailed }>
				<FormItem name="username" rule={ { require: true, message: '请输入用户名' } }>
					<input type="text" />
				</FormItem>
				<FormItem name="password" rule={ { require: true, message: '请输入密码' } }>
					<input type="password" />
				</FormItem>
				<button type="submit">submit</button>
			</Form>
		</div>
	)
}

export default FormPage