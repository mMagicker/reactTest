import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import type { Map } from 'leaflet'
import './index.scss'

const BaseMap = () => {
	const mapRef = useRef<Map>();

	useEffect(() => {
		const _map = L.map('base-map', {
			center: [
				51.505,
				-0.09,
			],
			zoom: 13,
		});

		mapRef.current = _map;
	}, []);


	return <div className="base-map" id="base-map" />
};

export default BaseMap;
