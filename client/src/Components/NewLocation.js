import React from 'react';

export default function NewLocation() {
	return (
		<div>
			<h1>create new</h1>
			<form>
				<h3>product</h3>
				<input type="text" placeholder="Item Name" />
				<h3>last ordered</h3>
				<input type="text" placeholder="yyyy-mm-dd" />
				<h3>city</h3>
				<input type="text" placeholder="City" />
				<h3>country</h3>
				<select>
					<option>idk</option>
				</select>
				<h3>quantity</h3>
				<input type="text" placeholder="0" />
			</form>
		</div>
	);
}
