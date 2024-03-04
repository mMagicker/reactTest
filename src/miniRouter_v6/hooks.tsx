import React, { useContext } from 'react'
import type { Route } from './Routes'
import { NavigateContext } from './Context'

export const useRoutes = (routes: any) => {
	const pathname = window.location.pathname
	return routes.map((route: Route) => {
		const match = route.path === pathname || pathname === "/" + route.path
		return match ? route.element : null
	})
}

export const useNavigate = () => {
	const { navigate } = useContext(NavigateContext)!
	return navigate.push
}
