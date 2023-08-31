import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import routes from "./routes.config";
import type { Route as RouteProps } from "./routes.config";
import { Modal } from "antd";

export default function Router() {
	const renderRoute = (route: RouteProps[]) => {
		return route.map((item, index) => {
			const {children} = item;
			if(children) {
				return renderRoute(children);
			}
			return <Route key={ index } path={ item.path } component={ item.component } />;
		});
	};

	const createRouter = (data: RouteProps, depth: number) => {
		const {path, name, children} = data;
		if(children) {
			return (
				<div key={ path }>
					<h2>{ name }</h2>
					{ children.map((item, index: number) => {
						return createRouter(item, depth + 1)
					}) }
				</div>
			)
		} else {
			return (
				<div key={ path }>
					<Link to={ path }>{ name }</Link>
				</div>
			)
		}
	}

	return (
		<BrowserRouter
			getUserConfirmation={ (result, callback) => {
				Modal.confirm({
					content: result,
					okText: "确认",
					cancelText: "取消",
					onOk: () => callback(true),
					onCancel: () => callback(false),
				});
			} }
		>
			<div className="menu">
				{ routes.map((item, index) => {
					return createRouter(item, index)
				}) }
			</div>
			<Switch>{ renderRoute(routes) }</Switch>
		</BrowserRouter>
	);
}
