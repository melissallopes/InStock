import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BackArrow from '../assets/Icons/SVG/Icon-back-arrow.svg'



export default class Inventory extends Component {
	render() {

        return (
			<div className="indet__div">
                <div className="indet__heading">
                    <div className="indet__heading-sub">
                        <Link to={`/inventory`}><button type="button"><img src={BackArrow} alt="back" className="indet__backarrow" /></button></Link>
                        <h1 className="indet__name">Product Name</h1>
                    </div>
                        <h3 className="indet__indicator">In Stock</h3>
                </div>

                <div className="indet__flex">
                    <div className="indet__description">
                        <div className="indet__info-box">
                            <h4 className="indet__info-head">Item Description</h4>
                            <p className="indet__info-body">
                                Here is a more detailed summary of the product name, it’s uses, industries and
                                possible attributes that could be used to describe the product.
                            </p>
                        </div>
                    </div>
                
                <div className="indet__details">
                    <div className="indet__details-small">
                        <div className="indet__info-box">
                            <h4 className="indet__info-head">Ordered By</h4>
                            <p className="indet__info-body">
                                Mark Saunders
                            </p>
                        </div>

                        <div className="indet__info-box">
                            <h4 className="indet__info-head">Reference Number</h4>
                            <p className="indet__info-body">
                                JK2020FD7811201
                            </p>
                        </div>

                        <div className="indet__info-box">
                            <h4 className="indet__info-head">Last Ordered</h4>
                            <p className="indet__info-body">
                                2018-05-24
                            </p>
                        </div>

                        <div className="indet__info-box">
                            <h4 className="indet__info-head">Location</h4>
                            <p className="indet__info-body">
                                Toronto, CAN
                            </p>
                        </div>

                        <div className="indet__info-box">
                            <h4 className="indet__info-head">Quantity</h4>
                            <p className="indet__info-body">
                                12000
                            </p>
                        </div>
                    </div>
                    <div className="indet__tags">
                        <div className="indet__info-box">
                            <h4 className="indet__info-head">Categories</h4>
                            <p className="indet__info-body">
                                Industrial, Automotive, Heavy, Mechanical, Engineering, Transportation, Sales
                            </p>
                        </div>
                    </div>
                </div>
                </div>
                <div className="indet__edit-wrapper">
                    <button type="button" className="indet__edit">Edit</button>
                </div>
			</div>
		);
	}
}
