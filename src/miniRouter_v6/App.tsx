import React from 'react'
import { BrowserRouter, Routes, Route } from './index'

const App = () => {
	return <BrowserRouter>
		<Routes>
			{/*<Route path="/">*/}
				<Route path="home" element={<Home />} />
				<Route path="about" element={<About />} />
			{/*</Route>*/}
		</Routes>
	</BrowserRouter>
}

const Home = () => <h1>Home</h1>
const About = () => <h1>About</h1>
const Layout = () => <div></div>

export default App
