import React from 'react';
import { createBrowserHistory } from "history";
import Router from "./Router";

const BrowserRouter = (props: React.PropsWithChildren) => {
	const { children } = props
	const navigator = createBrowserHistory()
	return <Router navigator={navigator}>
		{children}
	</Router>
};

export default BrowserRouter;
