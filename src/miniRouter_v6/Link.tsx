import React from 'react';
import { useNavigate } from './hooks'

interface LinkProps {
	to: string;
	target?: string;
}

const Link = (props: React.PropsWithChildren<LinkProps>) => {
	const { to, target, children } = props
	const navigate = useNavigate()

	const onAClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault()
		navigate(to)
	}
	return <a onClick={onAClick}>
		{children}
	</a>
};

export default Link;
