import React from 'react'
import "./index.scss"
import Router from './router'
import RefPage from "./pages/HooksPage/Ref"

const App = () => {
	return <div className="app">
		{/* <Router /> */}
		<RefPage />
	</div>
}

export default App