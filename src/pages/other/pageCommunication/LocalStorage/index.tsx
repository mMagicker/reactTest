import React, { useEffect } from 'react';

const LocalStoragePage = () => {

	const changeStorage = () => {
		window.localStorage.setItem('name', String(Math.random()))
	}

	useEffect(() => {
		window.onstorage = (e: StorageEvent) => {
			console.log(e)
		}
	}, [])
	return <div>
		<button onClick={changeStorage}>change storage</button>
	</div>
};

export default LocalStoragePage;
