import { ReactElement } from "react"

declare namespace ROUTE {
	type NormalCom = {
		path: string,
		component: () => ReactElement
	}
	type IndexCom = {
		index: boolean,
		path: string
	}
	type route = Com | {
		path: string,
		component: () => ReactElement,
		children: Com[]
	}
}