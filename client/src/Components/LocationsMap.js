import React from 'react';
import Arrow from '../assets/Icons/SVG/Icon-arrow-right.svg';
import { Link } from 'react-router-dom';

export default function LocationsMap(props) {
	const locDiv =
		props.data.locations &&
		props.data.locations.map((data, index) => {
			return (
				<div key={index} className="locations__info-bigbox">
					<div className="locations__info__firstBox">
						<div className="locations__info__wareBox">
							<h5 className="locations__info-warehouse h5info">{data.warehouse}</h5>
							<h5 className="locations__info-street h5info">{data.street}</h5>
						</div>
						<Link to={`/locations/${data.warehouse}?${index}`}>
							<button type="button">
								<img src={Arrow} alt="arrow" className="locations__info__warehouseStreet-img" />
							</button>
						</Link>
					</div>
					<div className="locations__info-tablet">
						<div className="locations__info__box">
							<h5 className="locations__info-name h5info">{data.name}</h5>
							<h5 className="locations__info-position h5info">{data.position}</h5>
						</div>
						<div className="locations__info__box">
							<h5 className="locations__info-number h5info">{data.number}</h5>
							<h5 className="locations__info-email h5info">{data.email}</h5>
						</div>
						<div className="locations__info__box">
							<h5 className="locations__info-categories1 h5info">{data.categories1}</h5>
							<h5 className="locations__info-categories2 h5info">{data.categories2}</h5>
						</div>
					</div>
				</div>
			);
		});
	return <div className="locations__info">{locDiv}</div>;
}
