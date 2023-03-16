import React from 'react';
import { Link, Outlet } from 'react-router-dom'

const IframePage = () => {

	const linksList = [
		{
			text: "iframe1",
			path: "/iframe-page/1"
		},
		{
			text: "iframe2",
			path: "/iframe-page/2"
		},
		{
			text: "iframe3",
			path: "/iframe-page/3"
		},
	]
	return (
		<div className="iframe-page">
			<div className="link-list">
				{
					linksList.map(item => {
						return <Link to={ item.path } key={ item.path }>
							{ item.text }
						</Link>
					})
				}
			</div>
			<div className="iframe-wrap">
				<Outlet />
			</div>
		</div>
	);
};

export default IframePage;
