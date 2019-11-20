import React from "react";
import axios from "axios";
import kebabIcon from "../assets/Icons/SVG/Icon-kebab-default.svg";

class Inventory extends React.Component {
  state = {
    inventory: undefined
  };

  render() {
    const inventory = this.state.inventory;

    if (this.state.inventory) {
      const InventoryList = inventory.map(product => {
        return (
          <div className="inventory__div">
            <div className="inventory__item">
              <h2 className="inventory__label">ITEM</h2>
              <p className="inventory__itens-bold">{product.item}</p>
              <p className="inventory__itens-description">
                {product.description}
              </p>
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
            <img className="inventory__icon" src={kebabIcon}></img>
          </div>
        );
      });

      return (
        <div>
          <div className="inventory__initial">
            <h2 className="inventory__title">Inventory</h2>
            <input className="inventory__input" placeholder="Search"></input>
          </div>
          <div className="inventory__desk-title-row">
            <h2 className="inventory__desk-label-item">Item</h2>
            <h2 className="inventory__desk-itens">Last Ordered</h2>
            <h2 className="inventory__desk-itens">Location</h2>
            <h2 className="inventory__desk-itens">Quantity</h2>
            <h2 className="inventory__desk-status">Status</h2>
          </div>
          <div>{InventoryList}</div>
        </div>
      );
    } else return <div>Loading...</div>;
  }
  componentDidMount() {
    axios.get("http://localhost:5000/inventory").then(response => {
      this.setState({
        inventory: response.data
      });
    });
  }
}

export default Inventory;
