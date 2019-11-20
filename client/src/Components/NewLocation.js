import React from 'react';
import { Link } from 'react-router-dom';
const { getCodes, getNames } = require('country-list');

export default function NewLocation() {
	const allCountry = getNames().map((data, index) => {
		return <option key={index}>{data}</option>;
	});

	return (
		<div className="newPage">
			<h2>create new</h2>
			<form>
				<h3>product</h3>
				<input type="text" placeholder="Item Name" className="newPage-input" />
				<h3>last ordered</h3>
				<input type="text" placeholder="yyyy-mm-dd" className="newPage-input" />
				<h3>city</h3>
				<input type="text" placeholder="City" className="newPage-input" />
				<h3>country</h3>
				<select>{allCountry}</select>
				<h3>quantity</h3>
				<input type="text" placeholder="0" className="newPage-input" />
				<h3>status</h3>
				<div className="newPage-instock">
					<h4>in stock</h4>
					<input className="apple-switch" type="checkbox" />
				</div>
				<h3>item description</h3>
				<input type="text" placeholder="(optional)" className="newPage-inputBox" />
				<div>
					<button type="button" className="newPage-save">
						save
					</button>
					<Link to="/">
						<button type="button" className="newPage-cancel">
							cancel
						</button>
					</Link>
				</div>
			</form>
		</div>
	);
}
