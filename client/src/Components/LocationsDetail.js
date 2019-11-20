import React from 'react';
import BackArrow from '../assets/Icons/SVG/Icon-back-arrow.svg';
import axios from 'axios';

export default function LocationsDetail(props) {
	console.log(props);
	const endPoint = props.match.params.warehouse.split(' ').join('');
	console.log(endPoint);

	axios.get(`http://localhost:5000/locations/${endPoint}`).then((res) => {
		console.log(res);
	});

	return (
		<div>
			<div>
				<button type="button">
					<img src={BackArrow} alt="back" />
				</button>
				<h1>warehouse name</h1>
			</div>
			<div>
				<h4>address</h4>
			</div>
		</div>
	);
}
