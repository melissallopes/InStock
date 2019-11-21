import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Switch from 'react-switch';
import axios from 'axios';
import Select from 'react-select';

export default class NewLocation extends Component {
	state = {
		value: 'select',
		checked: false,
		optionName: [],
		selectedOption: null,
		city: 'City',
		country: 'Country',
		status: 'Out of Stock'
	};

	componentDidMount() {
		axios.get('http://localhost:5000/locations').then((res) => {
			console.log(res.data);
			res.data.map((data, index) => {
				this.state.optionName.push({
					value: data.warehouse,
					label: data.warehouse,
					city: data.actualCity,
					country: data.actualCountry
				});

				return null;
			});
			console.log(this.state.optionName);
		});
	}

	handleChange = () => {
		if (this.state.checked === false) {
			this.setState({
				checked: true,
				status: 'In-Stock'
			});
		} else {
			this.setState({
				checked: false,
				status: 'Out of Stock'
			});
		}
	};

	dropDownChange = (selectedOption) => {
		this.setState({ selectedOption, city: selectedOption.city, country: selectedOption.country });
		console.log(`Option selected:`, selectedOption);
		console.log(this.state.selectedOption);
	};

	onSubmit = () => {
		if (this.desc.value === '') {
			this.desc.value = 'none';
		}
		axios.post('http://localhost:5000/inventory', {
			item: this.item.value,
			ordered: this.date.value,
			location: `${this.state.city}  ${this.state.country}`,
			quantity: this.quantity.value,
			status: this.state.status,
			description: this.desc.value
		});
	};

	render() {
		const { selectedOption } = this.state;

		return (
			<div className="newPage">
				<h2>create new</h2>
				<form>
					<h3>product</h3>
					<input
						type="text"
						placeholder="Item Name"
						className="newPage-input"
						ref={(ref) => (this.item = ref)}
					/>
					<h3>last ordered</h3>
					<input
						type="text"
						placeholder="yyyy-mm-dd"
						className="newPage-input"
						ref={(ref) => (this.date = ref)}
					/>
					<h3>city</h3>
					<input
						type="text"
						placeholder={this.state.city}
						className="newPage-input"
						ref={(ref) => (this.city = ref)}
					/>
					<h3>country</h3>
					<input
						type="text"
						placeholder={this.state.country}
						className="newPage-input"
						ref={(ref) => (this.country = ref)}
					/>
					<h3>warehouse</h3>
					<Select
						value={selectedOption}
						onChange={this.dropDownChange}
						options={this.state.optionName}
						className="newPage-select"
					>
						{this.state.optionName}
					</Select>

					<h3>quantity</h3>
					<input type="text" placeholder="0" className="newPage-input" ref={(ref) => (this.quantity = ref)} />
					<h3>status</h3>
					<div className="newPage-instock">
						<h4>in stock</h4>
						<Switch onChange={this.handleChange} checked={this.state.checked} />
					</div>
					<h3>item description</h3>
					<input
						type="text"
						placeholder="(optional)"
						className="newPage-inputBox"
						ref={(ref) => (this.desc = ref)}
					/>
					<div>
						<button type="button" className="newPage-save" onClick={this.onSubmit}>
							save
						</button>
						<Link to="/locations">
							<button type="button" className="newPage-cancel">
								cancel
							</button>
						</Link>
					</div>
				</form>
			</div>
		);
	}
}
