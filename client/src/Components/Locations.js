import React, { Component } from 'react';
import axios from 'axios';
import LocationsMapSmall from './LocationsMap';
import LocationsMapBig from './LocationsMapDesktop';
import { Link } from 'react-router-dom';

import Plus from '../assets/Icons/SVG/Icon-add.svg';

export default class Locations extends Component {
	constructor(props) {
		super(props);
		this.state = {
			locations: [],
			isDesktop: false,
			isTablet: false,
			display: 'none',
			value: 'select',
			checked: false,
			optionName: [],
			selectedOption: null
		};
		this.updatePredicate = this.updatePredicate.bind(this);
	}

	componentDidMount = () => {
		this.updatePredicate();
		window.addEventListener('resize', this.updatePredicate);

		axios.get('http://localhost:5000/locations').then((res) => {
			this.setState({
				locations: res.data
			});
		});
	};

	componentWillUnmount() {
		window.removeEventListener('resize', this.updatePredicate);
	}

	updatePredicate() {
		this.setState({
			isDesktop: window.innerWidth > 1439,
			isTablet: window.innerWidth > 767
		});
	}

	toggleDisplay = () => {
		if (this.state.display === 'none') {
			this.setState({
				display: 'flex'
			});
		} else {
			this.setState({
				display: 'none'
			});
		}
	};

	onSubmit = () => {
		axios.post('http://localhost:5000/locations', {
			warehouse: this.warehouseName.value,
			street: `${this.street.value}, ${this.city.value}, ${this.country.value} `,
			city: this.city.value,
			country: this.country.value,
			number: this.number.value,
			email: this.email.value,
			categories1: this.category.value,
			position: this.position.value,
			actualCity: this.city.value,
			actualCountry: this.country.value,
			shortStreet: this.street.value
		});
	};

	render() {
		const isDesktop = this.state.isDesktop;
		const isTablet = this.state.isTablet;

		return (
			<div>
				<div className="locations">
					<div className="locations__header">
						<h2 className="locations__header-title">locations</h2>
						<input type="text" className="locations__header-input" placeholder="Search" />
					</div>
					<div>
						{isDesktop ? <LocationsMapBig data={this.state} /> : <LocationsMapSmall data={this.state} />}
					</div>

					{isTablet ? (
						<button type="button" className="locations-button" onClick={this.toggleDisplay}>
							<img src={Plus} alt="upload" className="locations-button-img" />
						</button>
					) : (
						<Link to="/location/new">
							<button type="button" className="locations-button" onClick={this.toggleDisplay}>
								<img src={Plus} alt="upload" className="locations-button-img" />
							</button>
						</Link>
					)}

					<div className="uploadBig" style={{ display: `${this.state.display}` }}>
						<div className="uploadBig-inner">
							<h2>create new</h2>
							<div className="uploadBig-div">
								<div className="uploadBig-smallDiv">
									<h3>warehouse name</h3>
									<input
										type="text"
										placeholder="Warehouse Name"
										ref={(ref) => (this.warehouseName = ref)}
									/>
								</div>
								<div className="uploadBig-smallDiv">
									<h3>street</h3>
									<input type="text" placeholder="Street" ref={(ref) => (this.street = ref)} />
								</div>
							</div>
							<div className="uploadBig-div">
								<div className="uploadBig-smallDiv">
									<h3>city</h3>
									<input type="text" placeholder="City" ref={(ref) => (this.city = ref)} />
								</div>
								<div className="uploadBig-smallDiv">
									<h3>country</h3>
									<input type="text" placeholder="Country" ref={(ref) => (this.country = ref)} />
								</div>
							</div>
							<div className="uploadBig-cate">
								<h3>categories</h3>
								<input type="text" placeholder="Category" ref={(ref) => (this.category = ref)} />
							</div>
							<h2>contact</h2>
							<div className="uploadBig-div">
								<div className="uploadBig-smallDiv">
									<h3>name</h3>
									<input type="text" placeholder="Name" ref={(ref) => (this.personName = ref)} />
								</div>
								<div className="uploadBig-smallDiv">
									<h3>postition</h3>
									<input type="text" placeholder="Posititon" ref={(ref) => (this.position = ref)} />
								</div>
							</div>
							<div className="uploadBig-div">
								<div className="uploadBig-smallDiv">
									<h3>number</h3>
									<input type="text" placeholder="Number" ref={(ref) => (this.number = ref)} />
								</div>
								<div className="uploadBig-smallDiv">
									<h3>email</h3>
									<input type="text" placeholder="Email" ref={(ref) => (this.email = ref)} />
								</div>
							</div>
							<div>
								<button type="button" className="newPage-save" onClick={this.onSubmit}>
									save
								</button>

								<button type="button" className="newPage-cancel" onClick={this.toggleDisplay}>
									cancel
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
