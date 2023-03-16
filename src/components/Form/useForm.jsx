class FormStore {
	constructor() {
		this.store = {}
		this.callbacks = {}
		this.items = []
		this.messages = {}
	}

	getItemValue = (name) => {
		let _store = this.store
		return _store[name] || ""
	}

	registerItem = (item) => {
		this.items.push(item)
		const { name, rule } = item.props
		this.messages = {
			...this.messages,
			[name]: rule.message ?? "",
		}
	}

	getItemMessage = (name) => {
		return this.messages[name]
	}

	getItemValues = () => {
		let _store = this.store
		return _store
	}

	setItemValue = (newValue) => {
		this.store = { ...this.store, ...newValue }
		let _name = Object.keys(newValue)[0]
		this.items.forEach(item => {
			if(item.props.name == _name) {
				item.onStoreChange()
			}
		})
	}

	setCallbacks = (callbacks) => {
		this.callbacks = { ...this.callbacks, ...callbacks }
	}

	validate = () => {
		let _errors = []
		this.items.forEach(item => {
			const { name, rule } = item.props
			const value = this.getItemValue([name])
			if(rule.require && !value) {
				_errors.push({ [name]: rule.message, value })
			}
		})
		return _errors
	}

	submit = () => {
		let result = this.getItemValues()
		let _errors = this.validate()
		let _callbacks = this.callbacks
		if(_errors.length) {
			if(_callbacks.onFinishFailed) {
				let _onFinishFailed = _callbacks.onFinishFailed
				_onFinishFailed(_errors)
			}
		}else {

			if(_callbacks.onFinish) {
				let _onFinish = _callbacks.onFinish
				_onFinish(this.store)
			}
		}

	}
}

export default function useForm() {
	let _store = new FormStore()

	return [_store]
}