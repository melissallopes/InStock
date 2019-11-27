import React, { Component } from "react";
import { Link } from "react-router-dom";
import BackArrow from "../assets/Icons/SVG/Icon-back-arrow.svg";
import Switch from "react-switch";
import Select from "react-select";
import axios from "axios";

export default class InventoryDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {},
      bkp: {},
      edit: false,
      checked: false,
      status: "Out for Stock",
      optionName: [],
      location: "",
      selectedOption: null
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:5000/inventory/${this.props.match.params.item}`)
      .then(res => {
        this.setState({
          item: res.data[0],
          bkp: { ...res.data[0] }
        });
      });

    axios.get("http://localhost:5000/inventory").then(res => {
      console.log(res.data);
      res.data.map(data => {
        this.state.optionName.push({
          value: data.location,
          label: data.location
        });
      });
      // this.state.optionName.push({
      //   location: res.data.location
      // });
      console.log(this.state.optionName);
    });
  }

  handleChange(event) {
    event.preventDefault();
    let item = this.state.item;
    let name = event.target.name;
    let value = event.target.value;

    item[name] = value;
    this.setState({ item });
  }

  Update = () => {
    axios
      .put(
        `http://localhost:5000/inventory/${this.props.match.params.item}`,
        this.state.item
      )
      .then(res => {});
  };

  Restore = () => {
    this.setState({ edit: (this.state.edit = !this.state.edit) });
    this.setState({ item: this.state.bkp });
  };

  handleStatus = () => {
    if (this.state.checked === false) {
      this.setState({
        checked: true,
        status: "In-Stock"
      });
    } else {
      this.setState({
        checked: false,
        status: "Out of Stock"
      });
    }
  };

  dropDownChange = selectedOption => {
    this.setState({
      selectedOption
    });
    console.log(this.state.selectedOption);
  };

  render() {
    const { selectedOption } = this.state;

    if (this.state.item) {
      var quantity = this.state.item.quantity;

      return (
        <div className="indet__div">
          <div className="indet__heading">
            <div className="indet__heading-sub">
              <Link to={`/inventories`}>
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

                {this.state.edit ? (
                  <input
                    className="indet__input-edit-desc"
                    type="text"
                    name="description"
                    value={this.state.item["description"]}
                    onChange={this.handleChange.bind(this)}
                  />
                ) : (
                  <p className="indet__info-body">
                    {this.state.item.description}
                  </p>
                )}
              </div>
            </div>

            <div className="indet__details">
              <div className="indet__details-small">
                <div className="indet__info-box">
                  <h4 className="indet__info-head">Ordered By</h4>
                  {this.state.edit ? (
                    <input
                      className="indet__input-edit-order-by"
                      type="text"
                      name="description"
                      value={this.state.item["ordered_by"]}
                      onChange={this.handleChange.bind(this)}
                    />
                  ) : (
                    <p className="indet__info-body">
                      {this.state.item.ordered_by}
                    </p>
                  )}
                </div>

                <div className="indet__info-box">
                  <h4 className="indet__info-head">Reference Number</h4>
                  {this.state.edit ? (
                    <input
                      className="indet__input-edit-ref"
                      type="text"
                      name="ordered"
                      value={this.state.item["reference"]}
                      onChange={this.handleChange.bind(this)}
                    />
                  ) : (
                    <p className="indet__info-body">
                      {this.state.item.reference}
                    </p>
                  )}
                </div>

                <div className="indet__info-box">
                  <h4 className="indet__info-head">Last Ordered</h4>

                  {this.state.edit ? (
                    <input
                      className="indet__input-edit-order"
                      type="text"
                      name="ordered"
                      value={this.state.item["ordered"]}
                      onChange={this.handleChange.bind(this)}
                    />
                  ) : (
                    <p className="indet__info-body">
                      {this.state.item.ordered}
                    </p>
                  )}
                </div>

                <div className="indet__info-box">
                  <h4 className="indet__info-head">Location</h4>
                  {this.state.edit ? (
                    <Select
                      value={selectedOption}
                      onChange={this.dropDownChange}
                      options={this.state.optionName}
                    >
                      {this.state.optionName}
                    </Select>
                  ) : (
                    <p className="indet__info-body">
                      {this.state.item.location}
                    </p>
                  )}
                </div>

                <div className="indet__info-box">
                  <h4 className="indet__info-head">Quantity</h4>

                  {this.state.edit ? (
                    <input
                      className="indet__input-edit-quant"
                      type="text"
                      name="quantity"
                      value={this.state.item["quantity"]}
                      onChange={this.handleChange.bind(this)}
                    />
                  ) : (
                    <p className="indet__info-body">{quantity}</p>
                  )}
                </div>
              

              <div className="indet__info-box">
                <h4 className="indet__info-head">Status</h4>
                {this.state.edit ? (
                  <Switch
                    name="switch"
                    onChange={this.handleStatus.bind(this)}
                    checked={this.state.checked}
                  />
                ) : (
                  <p className="indet__info-body">{this.state.item.status}</p>
                )}
              </div>
              </div>

              <div className="indet__tags">
                <div className="indet__info-box">
                  <h4 className="indet__info-head">Categories</h4>
                  {this.state.edit ? (
                    <input
                      className="indet__input-edit-categ"
                      type="text"
                      name="description"
                      value={this.state.item["categories"]}
                      onChange={this.handleChange.bind(this)}
                    />
                  ) : (
                    <p className="indet__info-body">
                      {this.state.item.categories}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="indet__edit-wrapper">
            {this.state.edit ? (
              <div className="indet__edit-buttonsflex">
                <button
                  onClick={this.Update}
                  type="button"
                  className="indet__edit"
                >
                  Save
                </button>
                <button
                  onClick={this.Restore}
                  type="button"
                  className="indet__edit-cancel"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  this.setState({ edit: (this.state.edit = !this.state.edit) });
                }}
                type="button"
                className="indet__edit"
              >
                Edit
              </button>
            )}
          </div>
        </div>
      );
    }
  }
}
