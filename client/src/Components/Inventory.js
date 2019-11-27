import React from "react";
import axios from "axios";
import kebabIcon from "../assets/Icons/SVG/Icon-kebab-default.svg";
import { Link } from "react-router-dom";
import Plus from "../assets/Icons/SVG/Icon-add.svg";
import Switch from "react-switch";
import Select from "react-select";

class Inventory extends React.Component {
  constructor(props) {
    super(props);

    console.log(this.props);
    this.state = {
      inventory: undefined,
      isTablet: false,
      display: "none",
      value: "select",
      checked: false,
      optionName: [],
      selectedOption: null,
      city: "City",
      country: "Country",
      status: "Out for Stock"
    };
    this.updatePredicate = this.updatePredicate.bind(this);
  }

  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
    axios.get("http://localhost:5000/inventory").then(response => {
      // add property showing on object
      response.data.map(prod => {
        prod.showing = false;
      });
      console.log("res", response.data);
      this.setState({
        inventory: response.data
      });
    });
    axios.get("http://localhost:5000/locations").then(res => {
      res.data.map((data, index) => {
        this.state.optionName.push({
          value: data.warehouse,
          label: data.warehouse,
          city: data.actualCity,
          country: data.actualCountry
        });

        return null;
      });
    });
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  updatePredicate() {
    this.setState({
      isDesktop: window.innerWidth > 1439,
      isTablet: window.innerWidth > 767
    });
  }

  toggleDisplay = () => {
    if (this.state.display === "none") {
      this.setState({
        display: "flex"
      });
    } else {
      this.setState({
        display: "none"
      });
    }
  };

  handleChange = () => {
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
      selectedOption,
      city: selectedOption.city,
      country: selectedOption.country
    });
    console.log(`Option selected:`, selectedOption);
    console.log(this.state.selectedOption);
  };

  onSubmit = () => {
    if (this.desc.value === "") {
      this.desc.value = "none";
    }
    axios.post("http://localhost:5000/inventory", {
      item: this.item.value,
      ordered: this.date.value,
      location: `${this.state.city}  ${this.state.country}`,
      quantity: this.quantity.value,
      status: this.state.status,
      description: this.desc.value
    });
  };

  render() {
    const { selectedOption } = this.state;
    const isTablet = this.state.isTablet;
    const inventory = this.state.inventory;
    if (this.state.inventory) {
      const InventoryList = inventory.map(product => {
        return (
          <div className="inventory__flex">
            <div  className="inventory__div">
            <div className="inventory__item">
              <h2 className="inventory__label">ITEM</h2>
              <Link
                to={`/inventory/${product.item}`}
                className="inventory__link"
              >
                <p className="inventory__itens-bold">{product.item}</p>
                <p className="inventory__itens-description">
                  {product.description}
                </p>
              </Link>
            </div>
            <div className="inventory__order">
              <h2 className="inventory__label">LAST ORDERED</h2>
              <p className="inventory__itens">{product.ordered}</p>
            </div>
            <div className="inventory__location">
              <h2 className="inventory__label">LOCATION</h2>
              <p className="inventory__itens">{product.location}</p>
            </div>
            <div className="inventory__quantity">
              <h2 className="inventory__label">QUANTITY</h2>
              <p className="inventory__itens">{product.quantity}</p>
            </div>
            <div className="inventory__status">
              <h2 className="inventory__label">STATUS</h2>
              <p className="inventory__itens">{product.status}</p>
            </div>
            <pre>{product.showing}</pre>
            {product.showing ? (
              <button className="inventory__button btn-del">Remove</button>
            ) : null}
          </div>
            <div>
              <button
              className="inventory__icon"
              onClick={() => {
                this.setState({
                  showing: (product.showing = !product.showing)
                });
              }}
            >
              <img src={kebabIcon} />
            </button>
            </div>
          </div>
        );
      });

      return (
        <div>
          <div className="inventory__initial">
            <h2 className="inventory__title">Inventory</h2>
            <input className="inventory__input" placeholder="Search" />
          </div>
          <div className="inventory__desk-title-row">
            <h2 className="inventory__desk-label-item">Item</h2>
            <h2 className="inventory__desk-itens">Last Ordered</h2>
            <h2 className="inventory__desk-itens">Location</h2>
            <h2 className="inventory__desk-itens">Quantity</h2>
            <h2 className="inventory__desk-status">Status</h2>
          </div>
          <div>{InventoryList}</div>
          {isTablet ? (
            <button
              type="button"
              className="locations-button"
              onClick={this.toggleDisplay}
            >
              <img src={Plus} alt="upload" className="locations-button-img" />
            </button>
          ) : (
            <Link to="/inventorys/createnew">
              <button
                type="button"
                className="locations-button"
                onClick={this.toggleDisplay}
              >
                <img src={Plus} alt="upload" className="locations-button-img" />
              </button>
            </Link>
          )}
          <div
            className="uploadBig"
            style={{ display: `${this.state.display}` }}
          >
            <div className="uploadBig-inner">
              <h2>create new</h2>
              <div className="uploadBig-div">
                <div>
                  <h3>product</h3>
                  <input
                    type="text"
                    placeholder="Warehouse Name"
                    ref={ref => (this.item = ref)}
                  />
                </div>
                <div>
                  <h3>last ordered</h3>
                  <input
                    type="text"
                    placeholder="yyyy-mm-dd"
                    ref={ref => (this.date = ref)}
                  />
                </div>
              </div>
              <div className="uploadBig-div">
                <div>
                  <h3>city</h3>
                  <input
                    type="text"
                    placeholder={this.state.city}
                    ref={ref => (this.city = ref)}
                  />
                </div>
                <div>
                  <h3>country</h3>
                  <input
                    type="text"
                    placeholder={this.state.country}
                    ref={ref => (this.country = ref)}
                  />
                </div>
              </div>
              <div className="uploadBig-cate">
                <h3>warehouse</h3>
                <Select
                  value={selectedOption}
                  onChange={this.dropDownChange}
                  options={this.state.optionName}
                  className="uploadBig-selector"
                >
                  {this.state.optionName}
                </Select>
              </div>

              <div className="uploadBig-div">
                <div>
                  <h3>quantity</h3>
                  <input
                    type="text"
                    placeholder="Quantity"
                    ref={ref => (this.quantity = ref)}
                  />
                </div>
                <div>
                  <h3>status</h3>
                  <div className="newPage-instock">
                    <h4>in stock</h4>
                    <Switch
                      onChange={this.handleChange}
                      checked={this.state.checked}
                    />
                  </div>
                </div>
              </div>
              <div className="uploadBig-div">
                <h3>item description</h3>
                <input
                  type="text"
                  placeholder="(optional)"
                  className="bigUpload-desc"
                  ref={ref => (this.desc = ref)}
                />
              </div>
              <div>
                <button
                  type="button"
                  className="newPage-save"
                  onClick={this.onSubmit}
                >
                  save
                </button>

                <button
                  type="button"
                  className="newPage-cancel"
                  onClick={this.toggleDisplay}
                >
                  cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    } else return <div>Loading...</div>;
  }
}

export default Inventory;
