import React from 'react'
import StateRef from './pages/StateRef'
import StateRef2 from './pages/StateRef2'
// import EffectRef from "./pages/EffectRef";
// import MemoCom from "./pages/MemoCom";
// import UseMemoCom from "./pages/UseMemoCom";
import FormPage from './pages/FormPage.jsx'
import "./index.scss"

const App: React.FC = () => {
	return <div className="app">
		{/*<StateRef />*/ }
		{/*<StateRef2 />*/ }
		{/*<EffectRef />*/ }
		{/*<MemoCom />*/ }
		{/*<UseMemoCom />*/ }
		<FormPage />
	</div>
}

export default App