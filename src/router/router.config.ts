import type { ReactElement, FunctionComponent, ReactNode } from "react"
import pages from '@/pages'
import { ROUTE } from "@/router/types"

type Com = ROUTE.NormalCom | ROUTE.IndexCom



const routes: ROUTE.route[] = [
	{
		path: "/img-error",
		component: pages.ImgError
	},
	{
		path: "/iframe-page",
		component: pages.IframePage,
		children: [
			{
				path: "a",
				component: pages.IframeSon1
			},
			{
				path: "b",
				component: pages.IframeSon2
			},
			{
				path: "c",
				component: pages.IframeSon3
			}
		]
	},
	{
		path: '/context',
		component: pages.Context
	}
]


export default routes