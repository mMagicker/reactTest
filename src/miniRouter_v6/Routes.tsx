import React, { Children } from 'react';
import { useRoutes } from './hooks'
import type { ReactElement, ReactNode, PropsWithChildren } from 'react'

export interface Route {
	path: string
	element: ReactElement
}

const createRoutesFromChildren = (children: ReactNode) => {
	const routes: Route[] = []
	Children.forEach<ReactElement>(children as ReactElement, (child) => {
		routes.push({
			path: child.props.path, element: child.props.element,
		})
	})
	return routes
}

const Routes = (props: PropsWithChildren) => {
	const { children } = props
	const routes = createRoutesFromChildren(children)
	return useRoutes(routes)
};

export default Routes;
