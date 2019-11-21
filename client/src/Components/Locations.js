import React, { Component } from 'react';
import axios from 'axios';
import LocationsMapSmall from './LocationsMap';
import LocationsMapBig from './LocationsMapDesktop';
import { Link } from 'react-router-dom';

import Plus from '../assets/Icons/SVG/Icon-add.svg';
import NewLocation from './NewLocation';

const { getCodes, getNames } = require('country-list');

export default class Locations extends Component {
	constructor(props) {
		super(props);
		this.state = {
			locations: [],
			isDesktop: false,
			isToggle: false,
			isTablet: false,
			display: 'none'
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
		// if (this.state.isToggle === false) {
		// 	this.setState({
		// 		isToggle: true
		// 	});
		// 	console.log(this.state.isToggle);
		// } else {
		// 	this.setState({
		// 		isToggle: false
		// 	});
		// 	console.log(this.state.isToggle);
		// }
		if (this.state.display === 'none') {
			this.setState({
				display: 'flex'
			});
			console.log(this.state.display);
		} else {
			this.setState({
				display: 'none'
			});
			console.log(this.state.display);
		}
	};

	render() {
		const isDesktop = this.state.isDesktop;
		const isTablet = this.state.isTablet;
		const allCountry = getNames().map((data, index) => {
			return <option key={index}>{data}</option>;
		});
		if (this.state.isToggle === false) {
			return (
				<div>
					{/* <Header /> */}
					<div className="locations">
						<div className="locations__header">
							<h2 className="locations__header-title">locations</h2>
							<input type="text" className="locations__header-input" placeholder="Search" />
						</div>
						<div>
							{isDesktop ? (
								<LocationsMapBig data={this.state} />
							) : (
								<LocationsMapSmall data={this.state} />
							)}
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
						<div className="newBigPage" style={{ display: `${this.state.display}` }}>
<<<<<<< HEAD
						<div className="newBigPage-flex">
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
=======
							<div className="newBigPage-tablet">
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
>>>>>>> master
										</button>
										<Link to="/">
											<button type="button" className="newPage-cancel">
												cancel
											</button>
										</Link>
									</div>
								</form>
							</div>
						</div>
					</div>
					</div>
				</div>
			);
		} else {
			return (
				<div>
					{/* <Header /> */}
					<div className="locations">
						<div className="locations__header">
							<h2 className="locations__header-title">locations</h2>
							<input type="text" className="locations__header-input" placeholder="Search" />
						</div>
						<div>
							{isDesktop ? (
								<LocationsMapBig data={this.state} />
							) : (
								<LocationsMapSmall data={this.state} />
							)}
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
						<NewLocation style={{ display: `${this.state.display}` }} />
					</div>
				</div>
			);
		}

		// return (
		// 	<div className="locations">
		// 		<div className="locations__header">
		// 			<h2 className="locations__header-title">locations</h2>
		// 			<input type="text" className="locations__header-input" placeholder="Search" />
		// 		</div>
		// 		<div>{isDesktop ? <LocationsMapBig data={this.state} /> : <LocationsMapSmall data={this.state} />}</div>

		// 		<button type="button" className="locations-button" onClick={this.toggleDisplay}>
		// 			<img src={Plus} alt="upload" className="locations-button-img" />
		// 		</button>
		// 	</div>
		// );
	}
}
