import React from 'react';

export interface RouteProps {
	path: string;
	element?: React.ReactElement;
}

const Route = (props: React.PropsWithChildren<RouteProps>) => {
	return <div>
		Route
	</div>
};

export default Route;
