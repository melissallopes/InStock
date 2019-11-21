import React, { Component } from "react";
import { Link } from "react-router-dom";
import BackArrow from "../assets/Icons/SVG/Icon-back-arrow.svg";
import axios from "axios";

export default class InventoryDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      item: {}
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:5000/inventory/${this.props.match.params.item}`)
      .then(res => {
        this.setState({
          item: res.data[0]
        });
        console.log(this.state.item);
      });
  }

  render() {
    if (this.state.item) {
      return (
        <div className="indet__div">
          <div className="indet__heading">
            <div className="indet__heading-sub">
              <Link to={`/inventory`}>
                <button type="button">
                  <img
                    src={BackArrow}
                    alt="back"
                    className="indet__backarrow"
                  />
                </button>
              </Link>
              <h1 className="indet__name">{this.state.item.item}</h1>
            </div>
            <h3 className="indet__indicator">In Stock</h3>
          </div>
          <div className="indet__flex">
            <div className="indet__description">
              <div className="indet__info-box">
                <h4 className="indet__info-head">Item Description</h4>
                <p className="indet__info-body">
                  {this.state.item.description}
                </p>
              </div>
            </div>

            <div className="indet__details">
              <div className="indet__details-small">
                <div className="indet__info-box">
                  <h4 className="indet__info-head">Ordered By</h4>
                  <p className="indet__info-body">Mark Saunders</p>
                </div>

                <div className="indet__info-box">
                  <h4 className="indet__info-head">Reference Number</h4>
                  <p className="indet__info-body">JK2020FD7811201</p>
                </div>

                <div className="indet__info-box">
                  <h4 className="indet__info-head">Last Ordered</h4>
                  <p className="indet__info-body">{this.state.item.ordered}</p>
                </div>

                <div className="indet__info-box">
                  <h4 className="indet__info-head">Location</h4>
                  <p className="indet__info-body">{this.state.item.location}</p>
                </div>

                <div className="indet__info-box">
                  <h4 className="indet__info-head">Quantity</h4>
                  <p className="indet__info-body">{this.state.item.quantity}</p>
                </div>
              </div>
              <div className="indet__tags">
                <div className="indet__info-box">
                  <h4 className="indet__info-head">Categories</h4>
                  <p className="indet__info-body">
                    Industrial, Automotive, Heavy, Mechanical, Engineering,
                    Transportation, Sales
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="indet__edit-wrapper">
            <button type="button" className="indet__edit">
              Edit
            </button>
          </div>
        </div>
      );
    }
  }
}
