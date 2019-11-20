import React, { Component } from "react";

import LocationsMap from './LocationsMap';

export default class Locations extends Component {
<<<<<<< HEAD
  render() {
    return <div>LOC</div>;
  }
=======
	state = {
		locations: []
	};

	componentDidMount = () => {
		axios.get('http://localhost:5000/locations').then((res) => {
			this.setState({
				locations: res.data
			});
		});
	};

	render() {
		return (
			<div className="locations">
				<div className="locations__header">
					<h2 className="locations__header-title">locations</h2>
					<input type="text" className="locations__header-input" placeholder="Search" />
				</div>
				<LocationsMap data={this.state} />
			</div>
		);
	}
>>>>>>> master
}
