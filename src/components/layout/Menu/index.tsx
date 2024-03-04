import React from 'react';
import { Link, Outlet } from 'react-router-dom'
import './index.scss'

type Menu = {
	name: string
	path: string
	children?: Menu[]
}

type MenuProps = {
	data: Menu[]
}

const Menu = (props: MenuProps) => {
	const { data = [] } = props

	const createLink = (item: Menu, depth = 1, inheritPath = "") => {
		const hasChildren = item.children && item.children.length > 0

		if(hasChildren) {
			return <div key={item.path} className="menu-item">
				<div
					className="menu-name" style={{
					fontSize: `${26 - depth * 5}px`
				}}
				>
					{item.name}
				</div>
				<div
					className="menu-children"
					style={{
						marginLeft: `${depth * 10}px`
					}}
				>
					{item.children?.map((childItem: Menu,) => {
						return createLink(childItem, depth + 1, `${inheritPath}/${item.path}`)
					})}
				</div>

			</div>
		} else {
			return <Link to={`${inheritPath}/${item.path}`} key={item.path}>
				{item.name}
			</Link>
		}
	}
	return (<div className="layout-menu">
		<div className="menu-wrap">
			{data.map((item,) => {
				return createLink(item)
			})}
		</div>
		<div className="content-wrap">
			<Outlet />
		</div>
	</div>);
};

export default Menu;
