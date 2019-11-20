<<<<<<< HEAD
import React, { Component } from 'react';
import axios from 'axios';

import LocationsMapSmall from './LocationsMap';
import LocationsMapBig from './LocationsMapDesktop';

import Plus from '../assets/Icons/SVG/Icon-add.svg';

export default class Locations extends Component {
	constructor(props) {
		super(props);
		this.state = {
			locations: [],
			isDesktop: false
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
		this.setState({ isDesktop: window.innerWidth > 1439 });
	}

	render() {
		const isDesktop = this.state.isDesktop;
		return (
			<div className="locations">
				<div className="locations__header">
					<h2 className="locations__header-title">locations</h2>
					<input type="text" className="locations__header-input" placeholder="Search" />
				</div>
				<div>{isDesktop ? <LocationsMapBig data={this.state} /> : <LocationsMapSmall data={this.state} />}</div>

				<button type="button" className="locations-button">
					<img src={Plus} alt="upload" className="locations-button-img" />
				</button>
			</div>
		);
	}
=======
import React, { Component } from "react";
import axios from "axios";
import LocationsMap from "./LocationsMap";

export default class Locations extends Component {
  state = {
    locations: []
  };

  componentDidMount = () => {
    axios.get("http://localhost:5000/locations").then(res => {
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
          <input
            type="text"
            className="locations__header-input"
            placeholder="Search"
          />
        </div>
        <LocationsMap data={this.state} />
      </div>
    );
  }
>>>>>>> master
}
