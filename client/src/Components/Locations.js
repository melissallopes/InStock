import React, { Component } from 'react';
import axios from 'axios';
import LocationsMapSmall from './LocationsMap';
import LocationsMapBig from './LocationsMapDesktop';
import Header from './Header';
import { Link } from 'react-router-dom';

import Plus from '../assets/Icons/SVG/Icon-add.svg';

export default class Locations extends Component {
	constructor(props) {
		super(props);
		this.state = {
			locations: [],
			isDesktop: false,
			isToggle: false,
			isTablet: false
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
		if (this.state.isToggle === false) {
			this.setState({
				isToggle: true
			});
			console.log(this.state.isToggle);
		} else {
			this.setState({
				isToggle: false
			});
			console.log(this.state.isToggle);
		}
	};

	render() {
		const isDesktop = this.state.isDesktop;
		const isTablet = this.state.isTablet;
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
					</div>
				</div>
			);
		} else {
			return (
				<div>
					<button type="button" onClick={this.toggleDisplay} className="locations-button">
						<img src={Plus} alt="upload" />
					</button>
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
