import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import routesConfig from './routes.config'
import type { Route as RouteType } from './routes.config'
import { Menu } from "@/components";

const V6Router = () => {
	const createRoute = (route: RouteType) => {
		const hasChildren = route.children && route.children.length > 0
		if(hasChildren) {
			if(route.component) {
				return (<Route key={route.path} path={route.path} element={<route.component />}>
					{route.children?.map((childRoute, index) => {
						return createRoute(childRoute)
					})}
				</Route>)
			}
			return (<Route key={route.path} path={route.path}>
				{route.children?.map((childRoute, index) => {
					return createRoute(childRoute)
				})}
			</Route>)
		} else {
			const element = route.component ? <route.component /> : null
			return (<Route key={route.path} path={route.path} element={element} />)
		}
	}

	return <HashRouter>
		<Routes>
			<Route path="/" element={<Menu data={routesConfig} />}>
				{routesConfig.map((route, index) => {
					return createRoute(route)
				})}
			</Route>
		</Routes>
	</HashRouter>
};

export default V6Router;
