import React, { Component } from 'react';
import BackArrow from '../assets/Icons/SVG/Icon-back-arrow.svg';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ThreeDot from '../assets/Icons/SVG/Icon-kebab-default.svg';

export default class LocationsDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			detail: {},
			item: [],
			isTablet: false
		};
		this.updatePredicate = this.updatePredicate.bind(this);
	}

	componentDidMount() {
		this.updatePredicate();
		window.addEventListener('resize', this.updatePredicate);
		axios.get(`http://localhost:5000/locations/${this.props.match.params.warehouse}`).then((res) => {
			this.setState({
				detail: res.data[0]
			});
		});
		axios.get(`http://localhost:5000/inventory`).then((res) => {
			if (res !== undefined) {
				this.setState({
					item: res.data
					// item: res.data[this.props.location.search.split('?')[1]]
				});
			}
		});
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.updatePredicate);
	}

	updatePredicate() {
		this.setState({ isTablet: window.innerWidth > 767 });
	}

	locDetail = () => {
		return (
			<div className="locDetail">
				<div className="locDetail__back">
					<Link to="/locations" className="locDetail-link">
						<button type="button" className="locDetail__back-btn">
							<img src={BackArrow} alt="back" className="locDetail__back-img" />
						</button>
					</Link>

					<h2 className="locDetail__back-name">{this.state.detail.warehouse}</h2>
				</div>
				<div className="locDetail-tabletD">
					<div className="locDetail__address">
						<h3 className="locDetail-text locDetail-title">address</h3>
						<h4 className="locDetail__address-shortSt locDetail-text">{this.state.detail.shortStreet}</h4>
						<h4 className="locDetail__address-city locDetail-text">{this.state.detail.city}</h4>
						<h4 className="locDetail__address-country locDetail-text">{this.state.detail.country}</h4>
					</div>
					<div className="locDetail__contact">
						<h3 className="locDetail-text locDetail-title">contact</h3>
						<h4 className="locDetail__contact-name locDetail-text">{this.state.detail.name}</h4>
						<h4 className="locDetail__contact-position locDetail-text">{this.state.detail.position}</h4>
						<h4 className="locDetail__contact-number locDetail-text">{this.state.detail.number}</h4>
						<h4 className="locDetail__contact-email locDetail-text">{this.state.detail.email}</h4>
					</div>
				</div>
			</div>
		);
	};

	render() {
		const isTablet = this.state.isTablet;
		let smallTable = this.state.item.map((data, index) => {
			return (
				<div key={index} className="locItem">
					<div className="locItem-subDiv locItem-firstDiv">
						<div>
							<h3>item</h3>
							<h4 className="locItem-item locDetail-text">{data.item}</h4>
							<h4 className="locItem-desc locDetail-text">{data.description}</h4>
						</div>
						<img src={ThreeDot} alt="dropdown" className="locItem-threeDot" />
					</div>
					<div className="locItem-subDiv">
						<h3>last ordered</h3>
						<h4 className="locItem-ordered locDetail-text">{data.ordered}</h4>
					</div>
					<div className="locItem-subDiv">
						<h3>location</h3>
						<h4 className="locItem-location locDetail-text">{data.location}</h4>
					</div>
					<div className="locItem-subDiv">
						<h3>quantity</h3>
						<h4 className="locItem-quantity locDetail-text">{data.quantity}</h4>
					</div>
					<div className="locItem-subDiv">
						<h3>status</h3>
						<h4 className="locItem-status locDetail-text">{data.status}</h4>
					</div>
				</div>
			);
		});
		let bigTable = this.state.item.map((data, index) => {
			return (
				<div key={index + 10} className="locItem__big-border">
					<div className="locItem__big-div">
						<h4 className="locItem__big-item">{data.item}</h4>
						<h4 className="locItem__big-desc">{data.description}</h4>
					</div>
					<h4>{data.ordered}</h4>
					<h4>{data.location}</h4>
					<h4>{data.quantity}</h4>
					<h4>{data.status}</h4>
					<img src={ThreeDot} alt="dropdown" />
				</div>
			);
		});

		return (
			<div>
				{isTablet ? (
					<div>
						{this.locDetail()}
						<div className="locItem__big">
							<div className="locItem__title">
								<h3 className="locItem__title-item">item</h3>
								<h3>last ordered</h3>
								<h3>location</h3>
								<h3>quantity</h3>
								<h3>status</h3>
							</div>
							{bigTable}
						</div>
					</div>
				) : (
					<div>
						{this.locDetail()}

						{smallTable}
					</div>
				)}
			</div>
		);
	}
}
